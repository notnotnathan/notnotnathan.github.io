import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { projects, ProjectData } from "@/data/projects";
import ProjectDetail from "@/components/ProjectDetail";

const COLS = 3;

const Portfolio = () => {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  // Split projects into rows of COLS
  const rows: ProjectData[][] = [];
  for (let i = 0; i < projects.length; i += COLS) {
    rows.push(projects.slice(i, i + COLS));
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center py-16 px-6">
      <div className="w-full max-w-5xl space-y-14 font-mono text-base lowercase">

        <section className="space-y-1">
          <div className="flex items-baseline justify-between">
            <h1 className="text-lg font-bold">nathan ma — projects</h1>
            <Link to="/" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              ← home
            </Link>
          </div>
        </section>

        <section className="space-y-6">
          {rows.map((row, rowIdx) => (
            <div key={rowIdx}>
              {/* Image row — all same height via aspect-square */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-2">
                {row.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelected(project)}
                    className="group cursor-pointer w-full aspect-square overflow-hidden rounded-md border border-border"
                  >
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs">
                        no image
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {/* Title row — separate grid so all titles align */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {row.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelected(project)}
                    className="group text-left cursor-pointer flex justify-between items-start gap-2"
                  >
                    <span className="font-semibold group-hover:text-accent-foreground transition-colors text-sm">
                      {project.title}
                      <span className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors ml-1 text-xs whitespace-nowrap">{"[>]"}</span>
                    </span>
                    <span className="text-muted-foreground text-xs shrink-0 pt-0.5">{project.date}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto scrollbar-thin font-mono lowercase bg-background border-border">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-foreground font-bold text-lg">{selected.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground">{selected.date}</DialogDescription>
              </DialogHeader>
              <ProjectDetail project={selected} />
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
