import { CopyCommand } from "@/components/copy-command";
import { site } from "@/content/site";

const uninstallMethods = [
  { label: "macOS / Linux", command: site.uninstallCurlCommand },
  { label: "Windows", command: site.uninstallPowershellCommand },
  { label: "Cargo", command: site.uninstallCargoCommand },
] as const;

export function UninstallMethods() {
  return (
    <details className="group mt-6 border-t border-line/80 pt-5">
      <summary className="cursor-pointer font-mono text-xs text-muted-light transition-colors hover:text-white">
        Uninstall Savestate
      </summary>
      <div className="mt-5 space-y-4">
        <p className="max-w-xl text-xs leading-5 text-muted">
          In each integrated project, run{" "}
          <code className="text-muted-light">savestate integrate codex --remove</code> or{" "}
          <code className="text-muted-light">savestate integrate claude --remove</code> first. Your checkpoints and project configuration are always preserved.
        </p>
        {uninstallMethods.map((method) => (
          <div key={method.label}>
            <p className="mb-2 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted">
              {method.label}
            </p>
            <CopyCommand
              command={method.command}
              label={`${method.label} uninstall command`}
              className="bg-black/30"
            />
          </div>
        ))}
      </div>
    </details>
  );
}
