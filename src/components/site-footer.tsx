import { BrandLogo } from "@/components/brand-logo";
import Link from "next/link";
import { GitHubIcon } from "@/components/github-icon";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line/80 py-8">
      <div className="site-container flex flex-col gap-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-mint">
            <BrandLogo compact />
          </span>
          <span>Open source under the MIT License.</span>
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <Link className="footer-link" href="/teams">Team pilot</Link>
          <a className="footer-link" href={site.founderUrl} target="_blank" rel="noreferrer">Bilal Akkil</a>
          <a className="footer-link" href={`${site.github}/blob/main/LICENSE`} target="_blank" rel="noreferrer">
            License
          </a>
          <a className="footer-link" href={`${site.github}/blob/main/SECURITY.md`} target="_blank" rel="noreferrer">
            Security
          </a>
          <a className="footer-link inline-flex items-center gap-2" href={site.github} target="_blank" rel="noreferrer">
            <GitHubIcon className="size-4" aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
