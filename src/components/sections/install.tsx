import { ArrowUpRight, BookOpen } from "lucide-react";
import { GitHubIcon } from "@/components/github-icon";
import { InstallMethods } from "@/components/install-methods";
import { UninstallMethods } from "@/components/uninstall-methods";
import { site } from "@/content/site";

export function Install() {
  return (
    <section id="install" className="section-shell scroll-mt-24">
      <div className="site-container">
        <div className="install-panel">
          <div className="install-glow" aria-hidden="true" />
          <div className="relative z-10 min-w-0 max-w-2xl">
            <p className="eyebrow">Install your way</p>
            <h2 className="mt-5 text-[clamp(2.3rem,5vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-white">
              Give your agent an undo button.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-light sm:text-lg">
              Install Savestate, initialize it in your project, then connect Codex or Claude in one command.
            </p>
            <InstallMethods />
            <UninstallMethods />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a className="button button-primary w-full sm:w-auto" href={site.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="size-4" aria-hidden="true" />
                Explore the source
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <a className="button button-ghost w-full sm:w-auto" href={site.docs} target="_blank" rel="noreferrer">
                <BookOpen className="size-4" aria-hidden="true" />
                Read the docs
              </a>
            </div>
          </div>

          <div className="install-terminal min-w-0" aria-label="Savestate quick start commands">
            <div className="terminal-bar">
              <span className="bg-[#ff6b57]" />
              <span className="bg-[#ffbd2e]" />
              <span className="bg-[#28c840]" />
              <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted">project</span>
            </div>
            <div className="space-y-5 p-6 font-mono text-sm sm:p-7">
              <p><span className="text-mint">$</span> <span className="text-white">savestate init</span></p>
              <p><span className="text-mint">$</span> <span className="text-white">savestate integrate codex</span></p>
              <div className="terminal-success">
                <span className="text-mint">✓</span>
                <div>
                  <p className="text-white">Integration ready</p>
                  <p className="mt-1 text-xs leading-5 text-muted">Automatic checkpoints will run around agent sessions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
