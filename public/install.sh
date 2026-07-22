#!/bin/sh
set -eu

REPOSITORY="https://github.com/bil0ak/savestate"
INSTALL_DIR="${SAVESTATE_INSTALL_DIR:-$HOME/.local/bin}"

fail() {
  printf 'savestate installer: %s\n' "$1" >&2
  exit 1
}

case "$INSTALL_DIR" in
  /*) ;;
  *) fail "SAVESTATE_INSTALL_DIR must be an absolute path" ;;
esac

for command in curl tar install uname; do
  command -v "$command" >/dev/null 2>&1 || fail "required command not found: $command"
done

case "$(uname -s)" in
  Darwin) operating_system="macos" ;;
  Linux) operating_system="linux" ;;
  *) fail "unsupported operating system: $(uname -s)" ;;
esac

case "$(uname -m)" in
  x86_64 | amd64) architecture="x86_64" ;;
  arm64 | aarch64) architecture="aarch64" ;;
  *) fail "unsupported architecture: $(uname -m)" ;;
esac

if [ "$operating_system" = "linux" ]; then
  target="linux-${architecture}-musl"
else
  target="macos-${architecture}"
fi

latest_url="$(curl --proto '=https' --tlsv1.2 -fsSL -o /dev/null -w '%{url_effective}' "$REPOSITORY/releases/latest")"
version="${latest_url##*/}"

case "$version" in
  v*) ;;
  *) fail "could not determine the latest release" ;;
esac

archive="savestate-${version}-${target}.tar.gz"
download_url="$REPOSITORY/releases/download/${version}/${archive}"
checksums_url="$REPOSITORY/releases/download/${version}/SHA256SUMS"
temporary_directory="$(mktemp -d 2>/dev/null || mktemp -d -t savestate)"
trap 'rm -rf "$temporary_directory"' EXIT HUP INT TERM

printf 'Downloading Savestate %s for %s...\n' "$version" "$target"
curl --proto '=https' --tlsv1.2 -fsSL "$download_url" -o "$temporary_directory/$archive"
curl --proto '=https' --tlsv1.2 -fsSL "$checksums_url" -o "$temporary_directory/SHA256SUMS"

expected_checksum="$(awk -v file="$archive" '$2 == file { print $1 }' "$temporary_directory/SHA256SUMS")"
[ -n "$expected_checksum" ] || fail "release checksum not found for $archive"

if command -v sha256sum >/dev/null 2>&1; then
  actual_checksum="$(sha256sum "$temporary_directory/$archive" | awk '{ print $1 }')"
elif command -v shasum >/dev/null 2>&1; then
  actual_checksum="$(shasum -a 256 "$temporary_directory/$archive" | awk '{ print $1 }')"
else
  fail "sha256sum or shasum is required to verify the download"
fi

[ "$actual_checksum" = "$expected_checksum" ] || fail "checksum verification failed"

tar -xzf "$temporary_directory/$archive" -C "$temporary_directory"
mkdir -p "$INSTALL_DIR"
install -m 755 "$temporary_directory/savestate" "$INSTALL_DIR/savestate"

printf '\nSavestate %s installed to %s/savestate\n' "$version" "$INSTALL_DIR"

case ":$PATH:" in
  *":$INSTALL_DIR:"*) ;;
  *) printf 'Add %s to your PATH, then run: savestate --help\n' "$INSTALL_DIR" ;;
esac
