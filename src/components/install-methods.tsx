"use client";

import { Box, ExternalLink, Terminal } from "lucide-react";
import { useState, type KeyboardEvent } from "react";
import { CopyCommand } from "@/components/copy-command";
import { site } from "@/content/site";

const platforms = [
  { id: "unix", label: "macOS / Linux", note: null },
  { id: "windows", label: "Windows", note: "experimental" },
] as const;

const methodIds = ["script", "cargo"] as const;

type PlatformId = (typeof platforms)[number]["id"];
type MethodId = (typeof methodIds)[number];

function getMethod(platform: PlatformId, method: MethodId) {
  if (method === "cargo") {
    return {
      id: method,
      label: "Cargo",
      icon: Box,
      command: site.cargoCommand,
      description: "Builds Savestate from source using your local Rust toolchain.",
      detail: "Requires Rust 1.85+",
      scriptHref: null,
    };
  }

  if (platform === "windows") {
    return {
      id: method,
      label: "PowerShell",
      icon: Terminal,
      command: site.powershellCommand,
      description: "Downloads the experimental Windows x64 binary, verifies its checksum, and adds it to your user PATH.",
      detail: "Windows x64",
      scriptHref: "/install.ps1",
    };
  }

  return {
    id: method,
    label: "curl",
    icon: Terminal,
    command: site.curlCommand,
    description: "Downloads the latest prebuilt binary for macOS or Linux and verifies its checksum.",
    detail: "Recommended",
    scriptHref: "/install.sh",
  };
}

export function InstallMethods() {
  const [platform, setPlatform] = useState<PlatformId>("unix");
  const [activeMethod, setActiveMethod] = useState(0);
  const method = getMethod(platform, methodIds[activeMethod]);

  function selectWithKeyboard(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;

    event.preventDefault();
    const next = event.key === "ArrowRight"
      ? (activeMethod + 1) % methodIds.length
      : (activeMethod - 1 + methodIds.length) % methodIds.length;

    setActiveMethod(next);
    document.getElementById(`install-tab-${methodIds[next]}`)?.focus();
  }

  return (
    <div className="install-methods">
      <div className="install-platforms" role="group" aria-label="Operating system">
        {platforms.map(({ id, label, note }) => (
          <button
            key={id}
            type="button"
            className="install-platform"
            aria-pressed={platform === id}
            onClick={() => setPlatform(id)}
          >
            {label}
            {note && <span>{note}</span>}
          </button>
        ))}
      </div>

      <div className="install-tabs" role="tablist" aria-label="Installation method">
        {methodIds.map((id, index) => {
          const option = getMethod(platform, id);
          const Icon = option.icon;

          return (
            <button
              key={id}
              id={`install-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={activeMethod === index}
              aria-controls={`install-panel-${id}`}
              tabIndex={activeMethod === index ? 0 : -1}
              className="install-tab"
              onClick={() => setActiveMethod(index)}
              onKeyDown={selectWithKeyboard}
            >
              <Icon aria-hidden="true" />
              {option.label}
            </button>
          );
        })}
      </div>

      <div
        id={`install-panel-${method.id}`}
        role="tabpanel"
        aria-labelledby={`install-tab-${method.id}`}
        className="install-method-panel"
      >
        <CopyCommand command={method.command} className="bg-black/30" />
        <div className="mt-4 flex flex-col gap-2 text-xs leading-5 text-muted sm:flex-row sm:items-start sm:justify-between">
          <p className="max-w-md">{method.description}</p>
          {method.scriptHref ? (
            <a
              className="inline-flex shrink-0 items-center gap-1.5 text-mint transition-colors hover:text-mint-bright"
              href={method.scriptHref}
              target="_blank"
              rel="noreferrer"
            >
              View script
              <ExternalLink className="size-3" aria-hidden="true" />
            </a>
          ) : (
            <span className="shrink-0 font-mono text-muted-light">{method.detail}</span>
          )}
        </div>
      </div>
    </div>
  );
}
