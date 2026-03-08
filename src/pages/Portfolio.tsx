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

const Portfolio = () => {
  const [selected, setSelected] = useState<ProjectData | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground flex justify-center py-16 px-6">
      <div className="w-full max-w-5xl space-y-14 font-mono text-base lowercase">

        {/* Header */}
        <section className="space-y-1">
          <div className="flex items-baseline justify-between">
            <h1 className="text-lg font-bold">nathan ma — projects</h1>
            <Link
              to="/"
              className="text-muted-foreground text-sm hover:text-foreground transition-colors"
            >
              home
            </Link>
          </div>
        </section>

        {/* Project grid — cover cards */}
        <section>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelected(project)}
                className="group text-left cursor-pointer"
              >
                {/* Cover image */}
                <div className="w-full aspect-square overflow-hidden rounded-md border border-border mb-3">
                  {project.images[0] ? (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground text-xs">
                      no image
                    </div>
                  )}
                </div>

                {/* Title + date */}
                <div className="flex justify-between items-baseline gap-4">
                  <span className="font-semibold group-hover:text-accent-foreground transition-colors">
                    {project.title}
                    <span className="text-muted-foreground/50 group-hover:text-muted-foreground transition-colors ml-2 text-xs whitespace-nowrap">
                      {"[>]"}
                    </span>
                  </span>
                  <span className="text-muted-foreground text-sm shrink-0">{project.date}</span>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>

      {/* ── Project Detail Dialog ── */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto scrollbar-thin font-mono lowercase bg-background border-border">
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
    </div>
  );
};

export default Portfolio;
