import { workflow } from "@/content/site";

export function Workflow() {
  return (
    <section id="how-it-works" className="section-shell scroll-mt-24">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">How it works</p>
            <h2>Safe experiments, without the cleanup.</h2>
          </div>
          <p>
            Git protects the history you commit. Savestate protects the local working state around it.
          </p>
        </div>

        <ol className="workflow-grid">
          {workflow.map((step) => (
            <li key={step.number} className="workflow-card">
              <div className="workflow-number">{step.number}</div>
              <div className="mt-7">
                <h3 className="text-lg font-medium tracking-[-0.025em] text-white">{step.title}</h3>
                <p className="mt-3 min-h-[3.25rem] text-sm leading-6 text-muted-light">{step.description}</p>
              </div>
              <code className="mt-6 block overflow-x-auto whitespace-nowrap border-t border-line pt-4 font-mono text-[0.72rem] text-mint">
                <span className="text-muted" aria-hidden="true">$ </span>{step.command}
              </code>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
