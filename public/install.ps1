$ErrorActionPreference = "Stop"
Set-StrictMode -Version Latest

$Architecture = if ($env:PROCESSOR_ARCHITEW6432) {
    $env:PROCESSOR_ARCHITEW6432
} else {
    $env:PROCESSOR_ARCHITECTURE
}

if ($Architecture -ne "AMD64") {
    throw "Savestate's prebuilt Windows installer currently supports x64 only. Use Cargo for $Architecture."
}

$InstallDirectory = if ($env:SAVESTATE_INSTALL_DIR) {
    $env:SAVESTATE_INSTALL_DIR
} else {
    Join-Path $env:LOCALAPPDATA "Programs\Savestate\bin"
}

$TemporaryId = [guid]::NewGuid().ToString("N")
$ArchivePath = Join-Path ([System.IO.Path]::GetTempPath()) "savestate-$TemporaryId.zip"
$ChecksumsPath = Join-Path ([System.IO.Path]::GetTempPath()) "savestate-$TemporaryId-SHA256SUMS"
$Headers = @{ "User-Agent" = "savestate-installer" }

try {
    $Release = Invoke-RestMethod `
        -Uri "https://api.github.com/repos/bil0ak/savestate/releases/latest" `
        -Headers $Headers

    $Version = $Release.tag_name
    if (-not $Version -or -not $Version.StartsWith("v")) {
        throw "Could not determine the latest Savestate release."
    }

    $ArchiveName = "savestate-$Version-windows-x86_64-experimental.zip"
    $ArchiveAsset = $Release.assets | Where-Object { $_.name -eq $ArchiveName } | Select-Object -First 1
    $ChecksumsAsset = $Release.assets | Where-Object { $_.name -eq "SHA256SUMS" } | Select-Object -First 1

    if (-not $ArchiveAsset) {
        throw "The latest release does not include $ArchiveName."
    }
    if (-not $ChecksumsAsset) {
        throw "The latest release does not include SHA256SUMS."
    }

    Write-Host "Downloading Savestate $Version for Windows x64..."
    Invoke-WebRequest -UseBasicParsing -Uri $ArchiveAsset.browser_download_url -OutFile $ArchivePath
    Invoke-WebRequest -UseBasicParsing -Uri $ChecksumsAsset.browser_download_url -OutFile $ChecksumsPath

    $EscapedArchiveName = [regex]::Escape($ArchiveName)
    $ChecksumLine = Get-Content $ChecksumsPath |
        Where-Object { $_ -match "\s+$EscapedArchiveName$" } |
        Select-Object -First 1

    if (-not $ChecksumLine) {
        throw "Release checksum not found for $ArchiveName."
    }

    $ExpectedChecksum = ($ChecksumLine -split "\s+")[0].ToLowerInvariant()
    $ActualChecksum = (Get-FileHash -Path $ArchivePath -Algorithm SHA256).Hash.ToLowerInvariant()

    if ($ActualChecksum -ne $ExpectedChecksum) {
        throw "Checksum verification failed."
    }

    New-Item -ItemType Directory -Path $InstallDirectory -Force | Out-Null
    $DestinationPath = Join-Path $InstallDirectory "savestate.exe"

    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $Archive = [System.IO.Compression.ZipFile]::OpenRead($ArchivePath)
    try {
        $BinaryEntry = $Archive.Entries | Where-Object { $_.FullName -eq "savestate.exe" } | Select-Object -First 1
        if (-not $BinaryEntry) {
            throw "The release archive does not contain savestate.exe."
        }

        $InputStream = $BinaryEntry.Open()
        $OutputStream = [System.IO.File]::Open(
            $DestinationPath,
            [System.IO.FileMode]::Create,
            [System.IO.FileAccess]::Write,
            [System.IO.FileShare]::None
        )
        try {
            $InputStream.CopyTo($OutputStream)
        } finally {
            $OutputStream.Dispose()
            $InputStream.Dispose()
        }
    } finally {
        $Archive.Dispose()
    }

    $UserPath = [Environment]::GetEnvironmentVariable("Path", "User")
    $PathEntries = @($UserPath -split ";" | Where-Object { $_ })

    if ($PathEntries -notcontains $InstallDirectory) {
        $UpdatedUserPath = if ($UserPath) { "$UserPath;$InstallDirectory" } else { $InstallDirectory }
        [Environment]::SetEnvironmentVariable("Path", $UpdatedUserPath, "User")
        Write-Host "Added $InstallDirectory to your user PATH."
    }

    $env:Path = "$InstallDirectory;$env:Path"
    Write-Host ""
    Write-Host "Savestate $Version installed to $DestinationPath"
    Write-Host "Run: savestate --help"
} finally {
    if ([System.IO.File]::Exists($ArchivePath)) {
        [System.IO.File]::Delete($ArchivePath)
    }
    if ([System.IO.File]::Exists($ChecksumsPath)) {
        [System.IO.File]::Delete($ChecksumsPath)
    }
}
