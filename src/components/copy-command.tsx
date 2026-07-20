"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyCommandProps = {
  command: string;
  className?: string;
};

export function CopyCommand({ command, className = "" }: CopyCommandProps) {
  const [copied, setCopied] = useState(false);

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={`command-shell ${className}`}>
      <span className="font-mono text-[0.95rem] text-mint" aria-hidden="true">
        &gt;_
      </span>
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap font-mono text-sm text-white sm:text-[0.95rem]">
        {command}
      </code>
      <button
        type="button"
        className="copy-button"
        onClick={copyCommand}
        aria-label={copied ? "Copied install command" : "Copy install command"}
      >
        {copied ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}
        <span className="sr-only" aria-live="polite">
          {copied ? "Copied" : "Copy"}
        </span>
      </button>
    </div>
  );
}
