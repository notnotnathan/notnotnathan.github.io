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

interface EntryData {
  title: string;
  date: string;
  description: string;
  bullets: string[];
  images: string[];
}

const experiences: EntryData[] = [
  {
    title: "toyota motor manufacturing canada",
    date: "jan 2026 – apr 2026",
    description:
      "Manufacturing engineering co-op at Toyota's Cambridge, Ontario plant working on the RAV4 and Lexus lines.",
    bullets: [
      "Designed and implemented fixture improvements for body weld shop, reducing cycle time by 8%",
      "Conducted root cause analysis on assembly defects using Toyota Production System (TPS) principles",
      "Created SolidWorks models and drawings for custom tooling used on the production floor",
      "Collaborated with cross-functional teams to implement kaizen improvements",
    ],
    images: [toyotaImg],
  },
  {
    title: "general motors",
    date: "may 2025 – aug 2025",
    description:
      "Product engineering intern at GM's EV battery division working on next-generation Ultium platform.",
    bullets: [
      "Performed FEA simulations in ANSYS on battery enclosure components for crash and thermal loading",
      "Supported DFMEA and DVP&R documentation for new battery module designs",
      "Developed Python scripts to automate test data post-processing, saving 10+ hours per week",
      "Participated in design reviews and prototype validation testing",
    ],
    images: [gmImg],
  },
];

const projects: EntryData[] = [
  {
    title: "internal cycloidal actuator",
    date: "2024",
    description:
      "Designed and built a compact cycloidal speed reducer for use in robotic joint actuators.",
    bullets: [
      "Modeled the full cycloidal drive assembly in SolidWorks with parametric gear profiles",
      "Machined the eccentric shaft and output disc on a manual lathe and CNC mill",
      "Achieved a 30:1 reduction ratio in a package under 80mm diameter",
      "3D printed prototype housings for rapid iteration before final aluminum machining",
    ],
    images: [cycloidalImg],
  },
  {
    title: "pancake printer",
    date: "2024",
    description:
      "Built an automated pancake batter dispenser that prints custom shapes onto a griddle using G-code.",
    bullets: [
      "Designed a 2-axis CNC gantry system using 3D printed parts, stepper motors, and GT2 belts",
      "Developed Arduino firmware to interpret simplified G-code for batter extrusion paths",
      "Integrated a peristaltic pump for precise batter flow control",
      "Created a Python GUI for converting images to printable toolpaths",
    ],
    images: [pancakeImg],
  },
];

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
    <span className="font-semibold group-hover:text-accent-foreground transition-colors border-b border-transparent group-hover:border-muted-foreground/40">
      {entry.title}
    </span>
    <span className="text-muted-foreground shrink-0 ml-4">{entry.date}</span>
  </button>
);

const Index = () => {
  const [selected, setSelected] = useState<EntryData | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center py-16 px-6">
      <div className="w-full max-w-3xl space-y-14 font-mono text-sm lowercase">
        {/* Header */}
        <section className="space-y-1">
          <h1 className="text-base font-bold">nathan ma</h1>
          <p className="font-semibold">mechanical engineering</p>
          <p className="font-semibold">option in artificial intelligence</p>
          <p className="font-semibold">university of waterloo</p>
        </section>

        {/* Experience */}
        <section className="space-y-3">
          <h2 className="text-base font-bold">experience</h2>
          <div className="space-y-1">
            {experiences.map((e) => (
              <EntryRow key={e.title} entry={e} onClick={() => setSelected(e)} />
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-3">
          <h2 className="text-base font-bold">projects</h2>
          <div className="space-y-1">
            {projects.map((p) => (
              <EntryRow key={p.title} entry={p} onClick={() => setSelected(p)} />
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section className="space-y-3">
          <h2 className="text-base font-bold">technical skills</h2>
          <div className="space-y-1 text-muted-foreground">
            <p>software: solidworks, nx, autocad, catia 3dx, ansys, excel</p>
            <p>programming: python, c++, matlab, arduino, robotc, latex</p>
            <p>prototyping: machining, 3d printing, laser cutting, soldering</p>
          </div>
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
            <a href="mailto:n28ma@uwaterloo.ca" className="hover:underline">n28ma@uwaterloo.ca</a>
          </p>
        </section>
      </div>

      {/* Detail Dialog */}
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
                <p className="text-foreground text-sm">{selected.description}</p>

                <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
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
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
