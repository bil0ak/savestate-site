export const site = {
  name: "Savestate",
  url: "https://savestatecli.dev",
  github: "https://github.com/bil0ak/savestate",
  docs: "https://github.com/bil0ak/savestate#documentation",
  description:
    "Verified local checkpoints and safe rollback for coding-agent sessions.",
  curlCommand: "curl -fsSL https://savestatecli.dev/install.sh | sh",
  powershellCommand: "irm https://savestatecli.dev/install.ps1 | iex",
  cargoCommand: "cargo install savestate --locked",
  uninstallCurlCommand: "curl -fsSL https://savestatecli.dev/uninstall.sh | sh",
  uninstallPowershellCommand: "irm https://savestatecli.dev/uninstall.ps1 | iex",
  uninstallCargoCommand: "cargo uninstall savestate",
} as const;

export const navigation = [
  { label: "How it works", href: "#how-it-works", external: false },
  { label: "Safety", href: "#safety", external: false },
  { label: "Docs", href: site.docs, external: true },
  { label: "GitHub", href: site.github, external: true },
] as const;

export const workflow = [
  {
    number: "01",
    title: "Checkpoint",
    description: "Capture and verify the project state before work begins.",
    command: 'savestate create --label "before agent"',
  },
  {
    number: "02",
    title: "Let the agent work",
    description: "Use Codex or Claude hooks, or wrap any agent command.",
    command: "savestate run -- codex",
  },
  {
    number: "03",
    title: "Inspect",
    description: "Review every changed, added, and removed path locally.",
    command: "savestate diff",
  },
  {
    number: "04",
    title: "Restore if needed",
    description: "Preview the rollback, then restore the verified checkpoint.",
    command: "savestate restore --dry-run",
  },
] as const;
