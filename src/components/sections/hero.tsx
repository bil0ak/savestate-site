import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { CheckpointVisual } from "@/components/checkpoint-visual";
import { CopyCommand } from "@/components/copy-command";
import { GitHubIcon } from "@/components/github-icon";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="hero-section overflow-hidden border-b border-line/80">
      <div className="site-container relative grid items-center gap-8 py-12 sm:min-h-[calc(100svh-4.75rem)] sm:gap-12 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
        <div className="relative z-10 min-w-0 max-w-[43rem]">
          <div className="eyebrow mb-7">
            <span className="size-1.5 rounded-full bg-mint shadow-[0_0_14px_#65f2b1]" />
            verified local checkpoints
          </div>
          <h1 className="max-w-[13ch] text-balance text-[clamp(2.8rem,5.1vw,5.25rem)] font-semibold leading-[0.97] tracking-[-0.06em] text-white">
            Let the agent cook. <span className="text-muted-light">Keep an undo button.</span>
          </h1>
          <p className="mt-7 max-w-[36rem] text-pretty text-base leading-7 text-muted-light sm:text-lg sm:leading-8">
            Verified checkpoints and recovery for Claude Code and Codex. Capture selected project files and local settings, inspect what changed, and restore when an experiment goes wrong.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#install" className="button button-primary">
              Install Savestate
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#demo" className="button button-ghost">Watch the demo</a>
          </div>

          <CopyCommand command={site.curlCommand} className="mt-6 max-w-[36rem]" />

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-mint" /> Local-first</span>
            <span aria-hidden="true">·</span>
            <span>Git-aware</span>
            <span aria-hidden="true">·</span>
            <span>macOS · Linux · Windows <span className="text-amber">experimental</span></span>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link href="/teams" className="text-mint hover:text-mint-bright">Request a team pilot →</Link>
            <a href={site.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-muted-light hover:text-white"><GitHubIcon className="size-3.5" aria-hidden="true" />Open-source Rust CLI</a>
          </div>
        </div>

        <div className="relative min-h-[22rem] sm:min-h-[31rem] lg:min-h-[38rem]">
          <CheckpointVisual />
        </div>
      </div>
    </section>
  );
}
