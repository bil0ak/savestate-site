import { Database, FileCheck2, GitCompareArrows, RotateCcw } from "lucide-react";

const features = [
  {
    icon: FileCheck2,
    title: "Verify before trusting",
    description: "Content-addressed checkpoints are verified when created, explicitly checked, and restored.",
  },
  {
    icon: GitCompareArrows,
    title: "Preview every rollback",
    description: "Run a dry restore first. Savestate checks live state again before it changes anything.",
  },
  {
    icon: RotateCcw,
    title: "Recover after interruption",
    description: "Durable restore journals support explicit resume or rollback instead of leaving state ambiguous.",
  },
  {
    icon: Database,
    title: "Capture more than Git",
    description: "Opt into ignored paths, external roots, and local databases when your project needs them.",
  },
] as const;

export function Safety() {
  return (
    <section id="safety" className="section-shell border-y border-line/80 bg-panel/30 scroll-mt-24">
      <div className="site-container grid gap-14 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20">
        <div>
          <p className="eyebrow">Conservative by design</p>
          <h2 className="mt-5 max-w-[12ch] text-[clamp(2.2rem,4.2vw,3.9rem)] font-semibold leading-[1.01] tracking-[-0.055em] text-white">
            Rollback deserves more than hope.
          </h2>
          <p className="mt-7 max-w-md text-base leading-7 text-muted-light">
            Restoring local state is destructive. Savestate treats it like a transaction: verify, preserve, stage, swap, and verify again.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="feature-card">
              <div className="feature-icon"><Icon aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
