import { useEffect, useState } from "react";
import { ProjectData, Block } from "@/data/projects";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const DEFAULT_MAX_HEIGHT = 350;

const ImageBlock = ({ images, mode = "width" }: { images: string[]; mode?: "height" | "width" }) => {
  const isMobile = useIsMobile();
  if (images.length === 0) return null;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 w-full">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-full rounded-md border border-border"
            style={{ display: "block" }}
            loading="lazy"
          />
        ))}
      </div>
    );
  }

  if (mode === "height") {
    return (
      <div className="flex gap-2 w-full items-start flex-wrap">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="rounded-md border border-border"
            style={{
              height: DEFAULT_MAX_HEIGHT,
              width: "auto",
              display: "block",
              maxWidth: "100%",
            }}
            loading="lazy"
          />
        ))}
      </div>
    );
  }

  // width mode: equal heights, natural aspect ratio, slight crop to fill row
  return (
    <div className="flex gap-2 w-full" style={{ height: DEFAULT_MAX_HEIGHT }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="rounded-md border border-border"
          style={{
            height: DEFAULT_MAX_HEIGHT,
            width: "auto",
            flex: "1 1 0",
            minWidth: 0,
            objectFit: "cover",
          }}
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
      <div className="grid gap-4" style={{ gridTemplateColumns: `1fr ${COVER_SIZE}px` }}>
        <div className="space-y-4 min-w-0">
          <p className="text-foreground text-base">{project.summary}</p>
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

      {project.blocks && project.blocks.length > 0 && (
        <div className="space-y-6 border-t border-border pt-6">
          {project.blocks.map((block: Block, i: number) => {
            if (block.type === "text") {
              return (
                <p key={i} className="text-base text-foreground/80">
                  {block.content}
                </p>
              );
            }
            if (block.type === "images") {
              return <ImageBlock key={i} images={block.images} mode={block.mode} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
