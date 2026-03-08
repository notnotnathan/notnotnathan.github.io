import { useEffect, useState, useRef } from "react";
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

const MAX_HEIGHT = 400;
const MAX_GAP = 50;

const useImageDimensions = (srcs: string[]) => {
  const [dims, setDims] = useState<{ w: number; h: number }[] | null>(null);
  useEffect(() => {
    let cancelled = false;
    Promise.all(
      srcs.map(
        (src) =>
          new Promise<{ w: number; h: number }>((resolve) => {
            const img = new Image();
            img.onload = () => resolve({ w: img.naturalWidth, h: img.naturalHeight });
            img.onerror = () => resolve({ w: 1, h: 1 });
            img.src = src;
          })
      )
    ).then((results) => {
      if (!cancelled) setDims(results);
    });
    return () => { cancelled = true; };
  }, [srcs.join(",")]);
  return dims;
};

const ImageBlock = ({ images }: { images: string[] }) => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const dims = useImageDimensions(images);

  useEffect(() => {
    if (!containerRef.current) return;
    const ro = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  if (images.length === 0) return null;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-2 w-full">
        {images.map((src, i) => (
          <img key={i} src={src} alt="" className="w-full rounded-md border border-border block" loading="lazy" />
        ))}
      </div>
    );
  }

  if (!dims || containerWidth === 0) {
    return <div ref={containerRef} className="w-full" style={{ height: MAX_HEIGHT }} />;
  }

  const n = images.length;
  const gaps = n - 1;
  const sumAspects = dims.reduce((acc, d) => acc + d.w / d.h, 0);
  const naturalH = containerWidth / sumAspects;

  let finalHeight: number;
  let finalGap: number;

  if (naturalH <= MAX_HEIGHT) {
    finalHeight = naturalH;
    finalGap = gaps > 0 ? 12 : 0;
  } else {
    finalHeight = MAX_HEIGHT;
    const totalImgWidth = dims.reduce((acc, d) => acc + finalHeight * (d.w / d.h), 0);
    const remainingSpace = containerWidth - totalImgWidth;
    const neededGap = gaps > 0 ? remainingSpace / gaps : 0;
    finalGap = neededGap <= MAX_GAP ? Math.max(0, neededGap) : MAX_GAP;
  }

  return (
    <div
      ref={containerRef}
      className="flex w-full"
      style={{ gap: finalGap, height: Math.round(finalHeight) }}
    >
      {images.map((src, i) => {
        const aspectRatio = dims[i].w / dims[i].h;
        const imgWidth = Math.round(finalHeight * aspectRatio);
        return (
          <img
            key={i}
            src={src}
            alt=""
            className="rounded-md border border-border block flex-shrink-0"
            style={{ width: imgWidth, height: Math.round(finalHeight), objectFit: "fill" }}
            loading="lazy"
          />
        );
      })}
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
              return <ImageBlock key={i} images={block.images} />;
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
