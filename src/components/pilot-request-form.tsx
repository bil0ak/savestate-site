"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";

export function PilotRequestForm() {
  const [requestUrl, setRequestUrl] = useState<string | null>(null);

  function prepareRequest(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const project = String(fields.get("project") ?? "").trim();
    const workflow = String(fields.get("workflow") ?? "").trim();
    const body = [
      "## Team pilot request",
      `**Team or project:** ${project}`,
      `**Team size:** ${fields.get("teamSize")}`,
      `**Coding agent:** ${fields.get("agent")}`,
      `**Development platform:** ${fields.get("platform")}`,
      "",
      "### Workflow and recovery needs",
      workflow,
      "",
      "I’m interested in a two-week Savestate pilot on a development project. Please follow up through this GitHub issue.",
    ].join("\n");
    const url = new URL(`${site.github}/issues/new`);
    url.searchParams.set("title", `[Team pilot] ${project}`);
    url.searchParams.set("body", body);
    setRequestUrl(url.toString());
  }

  return (
    <form onSubmit={prepareRequest} onChange={() => setRequestUrl(null)} className="pilot-form">
      <label>Team or project name<input name="project" required maxLength={100} autoComplete="organization" placeholder="Your team or project" /></label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label>Team size<select name="teamSize" defaultValue="" required><option value="" disabled>Select a team size</option><option>Solo developer</option><option>2–5 developers</option><option>6–20 developers</option><option>21+ developers</option></select></label>
        <label>Coding agent<select name="agent" defaultValue="" required><option value="" disabled>Select your agent</option><option>Claude Code</option><option>Codex</option><option>Both</option><option>Another agent</option></select></label>
      </div>
      <label>Development platform<select name="platform" defaultValue="" required><option value="" disabled>Select your platform</option><option>macOS</option><option>Linux</option><option>Windows (experimental)</option><option>Mixed platforms</option></select></label>
      <label>What would you want to recover?<textarea name="workflow" required minLength={20} maxLength={1500} rows={5} placeholder="Tell us about a development workflow and a recovery problem you’d like to test." /></label>
      <p className="text-sm leading-6 text-muted-light" id="pilot-privacy">Requests are submitted as public GitHub issues. Use your GitHub account for follow-up and leave out private contact details, credentials, customer data, and source code. Preparing a request keeps these answers in your browser.</p>
      {requestUrl ? (
        <div role="status" className="rounded-lg border border-mint/30 bg-mint/5 p-5">
          <p className="mb-4 text-sm leading-6 text-muted-light">Your request is ready. Review it on GitHub, then submit the issue to contact Bilal.</p>
          <a href={requestUrl} target="_blank" rel="noreferrer" className="button button-primary" aria-describedby="pilot-privacy">Review & submit on GitHub <ArrowUpRight className="size-4" aria-hidden="true" /></a>
        </div>
      ) : <button type="submit" className="button button-primary" aria-describedby="pilot-privacy">Prepare pilot request <ArrowUpRight className="size-4" aria-hidden="true" /></button>}
    </form>
  );
}
