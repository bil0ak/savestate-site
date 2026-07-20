# Savestate website

The public website for [Savestate](https://github.com/bil0ak/savestate), a local checkpoint and rollback CLI for coding-agent sessions.

## Development

This is a Next.js App Router project using TypeScript and Tailwind CSS.

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```sh
npm run lint
npm run build
```

## Deployment

Import this repository into Vercel as a Next.js project. Vercel detects the framework and build settings automatically; no custom output directory is required.

Point `savestatecli.dev` at the resulting Vercel project after the first deployment.

The curl installer is served from `/install.sh`. It detects macOS/Linux and the host architecture, downloads the matching GitHub release, verifies its SHA-256 checksum, and installs the binary to `$HOME/.local/bin` by default.

The experimental Windows x64 installer is served from `/install.ps1`. It downloads the matching release archive, verifies its SHA-256 checksum, installs to `%LOCALAPPDATA%\Programs\Savestate\bin`, and adds that directory to the user PATH. Cargo remains available on every supported platform.
