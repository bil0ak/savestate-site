import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { PilotRequestForm } from "@/components/pilot-request-form";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Team pilot",
  description: "Test verified coding-agent checkpoints in a two-week Savestate team pilot with founder-led setup and recovery practice.",
  alternates: { canonical: "/teams" },
  openGraph: { title: "Savestate team pilot", url: "/teams" },
};

export default function TeamPilotPage() {
  return (
    <>
      <header className="site-header"><div className="site-container flex h-[4.75rem] items-center justify-between gap-4"><Link href="/" className="text-mint"><BrandLogo /></Link><Link href="/" className="nav-link"><ArrowLeft className="size-4" aria-hidden="true" />Back to Savestate</Link></div></header>
      <main className="section-shell">
        <div className="site-container grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="max-w-xl">
            <p className="eyebrow">Early team pilots</p>
            <h1 className="mt-5 text-[clamp(2.6rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.055em] text-white">Put recovery to work in your team.</h1>
            <p className="mt-6 text-lg leading-8 text-muted-light">A two-week pilot for software teams, agencies, and solo developers using Claude Code or Codex on an existing development project.</p>
            <ul className="mt-8 space-y-5 text-sm leading-6 text-muted-light">
              {[
                "A setup session with Bilal Akkil, Savestate’s founder.",
                "Help choosing checkpoint scope and enabling agent hooks.",
                "A recovery exercise using sample or disposable development files.",
                "A feedback session about reliability, workflow fit, and team needs.",
              ].map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-mint" aria-hidden="true" />{item}</li>)}
            </ul>
            <div className="mt-9 space-y-4 border-t border-line pt-6 text-sm leading-6 text-muted-light">
              <p>The open-source CLI and this early pilot are free. Ongoing team support and shared policies are a proposed paid offering; there is no purchase commitment.</p>
              <p>Automatic agent checkpoints capture filesystem state. Database checkpoints are experimental and require explicit setup. Windows support is experimental.</p>
              <Link href="/#demo" className="inline-block text-mint hover:text-mint-bright">Watch the recovery demo →</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-panel p-6 sm:p-9">
            <h2 className="text-2xl font-semibold tracking-tight text-white">Tell us about your workflow</h2>
            <p className="mb-7 mt-3 text-sm leading-6 text-muted-light">Bilal will follow up on your GitHub request to arrange the pilot.</p>
            <PilotRequestForm />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
