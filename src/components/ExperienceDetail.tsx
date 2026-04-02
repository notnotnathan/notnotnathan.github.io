import { useEffect, useState } from "react";
import { ProjectData, Block } from "@/data/projects";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const ImageBlock = ({ images, height = 400, gap = 30 }: { images: string[]; height?: number; gap?: number }) => {
  const isMobile = useIsMobile();
  if (images.length === 0) return null;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-3 w-full">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full rounded-md border border-border block" loading="lazy" />
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center" style={{ gap }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="rounded-md border border-border block"
          style={{ height, width: "auto" }}
          loading="lazy"
        />
      ))}
    </div>
  );
};

const ProjectDetail = ({ project }: { project: ProjectData }) => {
  const isMobile = useIsMobile();
  const COVER_SIZE = isMobile ? Math.round(window.innerWidth * 0.42) : 250;

  return (
    <div className="space-y-6 mt-2">
      {isMobile ? (
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <p className="text-foreground text-xl font-bold flex-1 min-w-0">{project.summary}</p>
            <img
              src={project.coverImage}
              alt={project.title}
              className="rounded-md border border-border object-cover shrink-0"
              style={{ width: COVER_SIZE, height: COVER_SIZE }}
              loading="lazy"
            />
          </div>
          <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside w-full">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="grid gap-4" style={{ gridTemplateColumns: `1fr ${COVER_SIZE}px` }}>
          <div className="space-y-4 min-w-0">
            <p className="text-foreground text-xl font-bold">{project.summary}</p>
            <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside">
              {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <img
              src={project.coverImage}
              alt={project.title}
              className="rounded-md border border-border object-cover"
              style={{ width: COVER_SIZE, height: COVER_SIZE }}
              loading="lazy"
            />
          </div>
        </div>
      )}

      {project.blocks && project.blocks.length > 0 && (
        <div className="space-y-6">
          {project.blocks.map((block: Block, i: number) => {
            if (block.type === "text") {
              return (
                <p key={i} className="text-base text-foreground/80">
                  {block.content}
                </p>
              );
            }
            if (block.type === "images") {
              return <ImageBlock key={i} images={block.images} height={block.height} gap={block.gap} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
