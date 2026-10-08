import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export function Teams() {
  return (
    <section id="teams" className="section-shell scroll-mt-24 border-y border-line/80 bg-panel/30">
      <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="eyebrow">For software teams & agencies</p>
          <h2 className="mt-5 max-w-[17ch] text-[clamp(2.2rem,4.2vw,3.9rem)] font-semibold leading-[1.03] tracking-[-0.055em] text-white">
            Make recovery part of your agent workflow.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-light">
            Bringing Claude Code or Codex into an existing codebase? Join a two-week pilot to test checkpoints and recovery on a development project, with help directly from the founder.
          </p>
          <Link href="/teams" className="button button-primary mt-8">
            Request a team pilot <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="self-center rounded-2xl border border-line bg-background/60 p-7 sm:p-9">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-mint">A small pilot. A real workflow.</p>
          <ul className="mt-6 space-y-5 text-sm leading-6 text-muted-light">
            {[
              "Set up the open-source CLI and agent hooks together.",
              "Choose the files and local settings your team needs to recover.",
              "Practice a rollback, then share what worked and what was missing.",
            ].map((item) => (
              <li key={item} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-mint" aria-hidden="true" />{item}</li>
            ))}
          </ul>
          <p className="mt-7 border-t border-line pt-5 text-sm leading-6 text-muted-light">
            The CLI is free under the MIT License. We’re exploring a paid team offering for shared checkpoint policies, recovery visibility, and support. Pilot feedback will shape it.
          </p>
        </div>
      </div>
    </section>
  );
}
