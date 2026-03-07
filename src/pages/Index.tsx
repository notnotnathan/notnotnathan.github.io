import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import toyotaImg from "@/assets/toyota.jpg";
import gmImg from "@/assets/gm.jpg";
import cycloidalImg from "@/assets/cycloidal-actuator.jpg";
import pancakeImg from "@/assets/pancake-printer.jpg";

// ─── Free Time photos ────────────────────────────────────────────────────────
// To add your own photos:
// 1. Create the folder:  src/assets/freetime/
// 2. Drop your images in there
// 3. Import them here like:  import ft1 from "@/assets/freetime/photo1.jpg";
// 4. Add them to the freeTimePhotos array below
const freeTimePhotos: string[] = [
  // ft1, ft2, ft3, ...  ← list your imports here
];

// ─── Types ────────────────────────────────────────────────────────────────────
interface ContentBlock {
  text: string;
  images?: string[];
}

interface EntryData {
  title: string;
  date: string;
  summary: string;
  bullets: string[];
  blocks?: ContentBlock[];
  images: string[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const experiences: EntryData[] = [
  {
    title: "toyota motor manufacturing canada",
    date: "jan 2026 – apr 2026",
    summary: "engineering analyst co-op at toyota's cambridge, ontario plant.",
    bullets: [
      "led a tbp-driven continuous improvement project targeting shellbody sealer vision system downtime, reducing coherix-related equipment fault time by approximately 70%. applied structured problem-solving to identify root causes and presented results to senior management.",
      "directed integration of a torque gun system to accommodate two vehicle models with different requirements. coordinated between production, maintenance, contractors, and vendors while overseeing weekend trial runs and commissioning involving plc logic and system validation.",
      "audited and optimized weld scheduling parameters to reduce weld spatter, eliminate weld separation defects, and decrease welding tip replacement frequency — contributing to estimated annual cost and material savings.",
      "conducted time studies for overcycle processes and implemented improvements that reduced unnecessary robot movement and increased process catch-up capability.",
    ],
    images: [toyotaImg],
    blocks: [
      // Add detailed project blocks here when ready. Example:
      // {
      //   text: "sealer vision system: detailed breakdown of the coherix fault analysis...",
      //   images: [sealerImg],
      // },
    ],
  },
  {
    title: "general motors",
    date: "may 2025 – aug 2025",
    summary: "industrial engineering co-op at gm's oshawa assembly plant on the chevrolet silverado line.",
    bullets: [
      "led a continuous improvement initiative eliminating production inefficiencies through root cause analysis and cross-functional collaboration — reduced job cycle times by up to 11.8% and eliminated significant line downtime, increasing silverado throughput.",
      "conducted time studies and redesigned standardized work across 30+ stations using lean manufacturing principles, reducing wasted movement and ergonomic risks.",
      "updated 10,000+ sqft of factory layout in autocad, delivering precise standardized floor plans that improved cross-functional coordination.",
      "attended current and future product design review meetings, connecting design intent with real-world assembly outcomes through practical dfma understanding.",
      "developed an excel-based readiness document mapping job elements to option codes, tooling, part numbers, and rack sizes — improving efficiency of plant floor changeovers.",
    ],
    images: [gmImg],
    blocks: [],
  },
];

const projects: EntryData[] = [
  {
    title: "internal cycloidal actuator",
    date: "2024",
    summary: "engineered a compact 7:1 cycloidal actuator for dynamic robotic joints at low cost.",
    bullets: [
      "engineered a compact 7:1 cycloidal actuator for dynamic robotic joints at low cost.",
      "performed iterative design on gear and housing tolerances to reduce backlash while preserving backdrivability and achieving smooth, reliable motion.",
    ],
    images: [cycloidalImg],
    blocks: [],
  },
  {
    title: "pancake printer",
    date: "2024",
    summary: "built a functional 2d gantry pancake printer integrating tetrix structural components, lego ev3 motors, and custom 3d-printed adapters.",
    bullets: [
      "built a functional 2d gantry pancake printer integrating tetrix structural components, lego ev3 motors, and custom 3d-printed adapters.",
      "designed a cad assembly in solidworks, ensuring mechanical fitments and reducing prototyping time.",
      "programmed motion routines in c++, achieving precise, synchronized xy motion for accurate batter extrusion.",
    ],
    images: [pancakeImg],
    blocks: [],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const EntryRow = ({
  entry,
  onClick,
}: {
  entry: EntryData;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex justify-between w-full text-left group cursor-pointer"
  >
    <span className="font-semibold group-hover:text-accent-foreground transition-colors border-b border-transparent group-hover:border-muted-foreground/40 flex items-center gap-1">
      {entry.title}
      <span className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors ml-2 text-xs">{"[>]"}</span>
    </span>
    <span className="text-muted-foreground shrink-0 ml-4">{entry.date}</span>
  </button>
);

const PhotoCarousel = ({ photos }: { photos: string[] }) => {
  const [index, setIndex] = useState(0);

  if (photos.length === 0) {
    return (
      <p className="text-muted-foreground text-sm text-center py-10">
        no photos yet — add them to src/assets/freetime/ and import in index.tsx
      </p>
    );
  }

  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setIndex((i) => (i + 1) % photos.length);

  return (
    <div className="space-y-4">
      {/* Main image — natural aspect ratio, no cropping */}
      <div className="relative group">
        <img
          src={photos[index]}
          alt={`free time ${index + 1}`}
          className="w-full rounded-md border border-border"
          style={{ display: "block", height: "auto" }}
        />

        {/* Prev / Next arrows — only show if multiple photos */}
        {photos.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded px-2 py-1 text-sm hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 border border-border rounded px-2 py-1 text-sm hover:bg-muted transition-colors opacity-0 group-hover:opacity-100"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Counter */}
      {photos.length > 1 && (
        <p className="text-center text-muted-foreground text-xs">
          {index + 1} / {photos.length}
        </p>
      )}

      {/* Thumbnail strip — natural aspect ratio thumbnails */}
      {photos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {photos.map((src, i) => (
            <button key={i} onClick={() => setIndex(i)} className="shrink-0">
              <img
                src={src}
                alt={`thumb ${i}`}
                style={{ height: "56px", width: "auto", display: "block" }}
                className={`rounded border transition-all ${
                  i === index
                    ? "border-foreground opacity-100"
                    : "border-border opacity-40 hover:opacity-80"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const Index = () => {
  const [selected, setSelected] = useState<EntryData | null>(null);
  const [freeTimeOpen, setFreeTimeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center py-16 px-6">
      <div className="w-full max-w-3xl space-y-14 font-mono text-base lowercase">

        {/* Header */}
        <section className="space-y-1">
          <h1 className="text-lg font-bold">nathan ma</h1>
          <p className="font-semibold">mechanical engineering</p>
          <p className="font-semibold">option in artificial intelligence</p>
          <p className="font-semibold">university of waterloo</p>
        </section>

        {/* Experience */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold">experience</h2>
          <div className="space-y-1">
            {experiences.map((e) => (
              <EntryRow key={e.title} entry={e} onClick={() => setSelected(e)} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold">projects</h2>
          <div className="space-y-1">
            {projects.map((p) => (
              <EntryRow key={p.title} entry={p} onClick={() => setSelected(p)} />
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold">technical skills</h2>
          <div className="space-y-1 text-muted-foreground">
            <p>software: solidworks, nx, autocad, catia 3dx, ansys, excel</p>
            <p>programming: python, c++, matlab, arduino, robotc, latex</p>
            <p>documentation: mechanical engineering drawings, report writing, gd&t, gantt charts</p>
            <p>prototyping: machining, 3d printing, laser cutting, soldering</p>
          </div>
        </section>

        {/* Free Time */}
        <section>
          <button
            onClick={() => setFreeTimeOpen(true)}
            className="flex items-center gap-1 group cursor-pointer"
          >
            <h2 className="text-lg font-bold group-hover:text-accent-foreground transition-colors">
              free time
            </h2>
            <span className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors ml-2 text-xs">[>]</span>
          </button>
        </section>

        {/* Contact */}
        <section className="space-y-1">
          <p className="font-semibold">
            <a href="https://nathanma.ca" className="hover:underline">nathanma.ca</a>
          </p>
          <p className="text-muted-foreground">
            <a href="https://linkedin.com/in/nathanma0" className="hover:underline">linkedin.com/in/nathanma0</a>
          </p>
          <p className="text-muted-foreground">
            <a href="mailto:n23ma@uwaterloo.ca" className="hover:underline">n23ma@uwaterloo.ca</a>
          </p>
        </section>
      </div>

      {/* ── Experience / Project Detail Dialog ── */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto font-mono lowercase bg-background border-border">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-foreground font-bold text-lg">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  {selected.date}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-2">
                <p className="text-foreground text-base">{selected.summary}</p>

                <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside">
                  {selected.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                {selected.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={selected.title}
                    className="w-full rounded-md border border-border"
                    loading="lazy"
                  />
                ))}

                {selected.blocks && selected.blocks.length > 0 && (
                  <div className="space-y-8 border-t border-border pt-6">
                    {selected.blocks.map((block, i) => (
                      <div key={i} className="space-y-4">
                        <p className="text-base text-foreground/80">{block.text}</p>
                        {block.images &&
                          block.images.map((src, j) => (
                            <img
                              key={j}
                              src={src}
                              alt={`${selected.title} detail ${i}-${j}`}
                              className="w-full rounded-md border border-border"
                              loading="lazy"
                            />
                          ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* ── Free Time Photo Dialog ── */}
      <Dialog open={freeTimeOpen} onOpenChange={setFreeTimeOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto font-mono lowercase bg-background border-border">
          <DialogHeader>
            <DialogTitle className="text-foreground font-bold text-lg">free time</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              life outside the shop
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <PhotoCarousel photos={freeTimePhotos} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
