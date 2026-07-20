import { ArrowRight, ShieldCheck } from "lucide-react";
import { CheckpointVisual } from "@/components/checkpoint-visual";
import { CopyCommand } from "@/components/copy-command";
import { GitHubIcon } from "@/components/github-icon";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="hero-section overflow-hidden border-b border-line/80">
      <div className="site-container relative grid min-h-[calc(100svh-4.75rem)] items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-10">
        <div className="relative z-10 max-w-[43rem]">
          <div className="eyebrow mb-7">
            <span className="size-1.5 rounded-full bg-mint shadow-[0_0_14px_#65f2b1]" />
            verified local checkpoints
          </div>
          <h1 className="max-w-[13ch] text-balance text-[clamp(2.8rem,5.1vw,5.25rem)] font-semibold leading-[0.97] tracking-[-0.06em] text-white">
            Let the agent cook. <span className="text-muted-light">Keep an undo button.</span>
          </h1>
          <p className="mt-7 max-w-[36rem] text-pretty text-base leading-7 text-muted-light sm:text-lg sm:leading-8">
            Savestate creates verified local checkpoints before coding agents change your project—so you can inspect, restore, and recover safely.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#install" className="button button-primary">
              Install Savestate
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a href={site.github} target="_blank" rel="noreferrer" className="button button-ghost">
              <GitHubIcon className="size-4" aria-hidden="true" />
              View on GitHub
            </a>
          </div>

          <CopyCommand command={site.curlCommand} className="mt-6 max-w-[36rem]" />

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-3.5 text-mint" /> Local-first</span>
            <span aria-hidden="true">·</span>
            <span>Git-aware</span>
            <span aria-hidden="true">·</span>
            <span>macOS · Linux · Windows <span className="text-amber">experimental</span></span>
          </div>
        </div>

        <div className="relative -mx-8 min-h-[31rem] sm:mx-0 lg:min-h-[38rem]">
          <CheckpointVisual />
        </div>
      </div>
    </section>
  );
}
