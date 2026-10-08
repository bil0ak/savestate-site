import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function Founder() {
  return (
    <section id="about" className="section-shell scroll-mt-24">
      <div className="site-container grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="eyebrow">Built by Bilal Akkil</p>
          <h2 className="mt-5 max-w-[15ch] text-[clamp(2rem,3.8vw,3.4rem)] font-semibold leading-[1.04] tracking-[-0.05em] text-white">More confidence between commits.</h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-7 text-muted-light">
          <p>Savestate is an independent developer-tools project founded by Bilal Akkil. Its focus is practical: help developers recover the local working state around an agent session, including the selected files and settings that sit outside committed code.</p>
          <p>The Rust CLI is open source, with project-local integrations for Claude Code and Codex. We’re inviting early users to help us understand what teams need from recovery, setup, and support.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
            <a href={site.founderUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-mint hover:text-mint-bright">Meet the founder <ArrowUpRight className="size-4" aria-hidden="true" /></a>
            <a href={`${site.github}/issues`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-mint hover:text-mint-bright">Questions & feedback <ArrowUpRight className="size-4" aria-hidden="true" /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
