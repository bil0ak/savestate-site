import { Download } from "lucide-react";

export function Demo() {
  return (
    <section id="demo" className="section-shell scroll-mt-24 border-t border-line/80">
      <div className="site-container">
        <div className="section-heading">
          <div><p className="eyebrow">See it work</p><h2>Shell changes. A verified way back.</h2></div>
          <p>Watch a checkpoint restore a changed file, recover explicitly included local settings, and remove a new file from a sample project.</p>
        </div>
        <video className="demo-video" controls preload="metadata" playsInline poster="/demo/savestate-demo-poster.jpg" aria-label="Savestate CLI checkpoint and restore demonstration">
          <source src="/demo/savestate-demo.mp4" type="video/mp4" />
          <track kind="captions" src="/demo/savestate-demo.vtt" srcLang="en" label="English" default />
          Your browser can’t play this video. <a href="/demo/savestate-demo.mp4">Download the demo.</a>
        </video>
        <div className="mt-4 flex flex-col justify-between gap-3 text-xs leading-5 text-muted-light sm:flex-row">
          <p className="max-w-3xl">Recorded CLI output from Savestate 0.1.2. The shell changes are scripted; the restore and verification run on real files. Claude hooks are installed in the sample project. No live Claude session or database restore is shown.</p>
          <a href="/demo/savestate-demo.txt" className="inline-flex shrink-0 items-center gap-2 text-mint"><Download className="size-3.5" aria-hidden="true" />Read the transcript</a>
        </div>
      </div>
    </section>
  );
}
