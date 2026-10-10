import { ArrowUpRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { navigation } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container flex h-[4.75rem] items-center justify-between gap-6">
        <a href="#top" className="text-mint transition-opacity hover:opacity-80">
          <BrandLogo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-link"
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              {item.label}
              {item.external && <ArrowUpRight className="size-3" aria-hidden="true" />}
            </a>
          ))}
        </nav>

        <a href="#install" className="button button-quiet h-10 px-5">
          Install
        </a>
      </div>
    </header>
  );
}
