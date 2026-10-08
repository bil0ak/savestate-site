import { Hero } from "@/components/sections/hero";
import { Install } from "@/components/sections/install";
import { Safety } from "@/components/sections/safety";
import { Workflow } from "@/components/sections/workflow";
import { Demo } from "@/components/sections/demo";
import { Teams } from "@/components/sections/teams";
import { Founder } from "@/components/sections/founder";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Workflow />
        <Safety />
        <Demo />
        <Teams />
        <Founder />
        <Install />
      </main>
      <SiteFooter />
    </>
  );
}
