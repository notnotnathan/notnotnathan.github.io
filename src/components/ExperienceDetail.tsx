import { useEffect, useState } from "react";
import { ExperienceData } from "@/data/experiences";
import { Block } from "@/data/projects";

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

const ExperienceDetail = ({ experience }: { experience: ExperienceData }) => {
  return (
    <div className="space-y-6 mt-2">
      <div className="space-y-4">
        <ul className="space-y-2 text-base text-muted-foreground list-none">
          {experience.bullets.map((b, i) => (
            <li key={i}><span className="text-muted-foreground/50 mr-2">{">"}</span>{b}</li>
          ))}
        </ul>
      </div>

      {experience.blocks && experience.blocks.length > 0 && (
        <div className="space-y-6">
          {experience.blocks.map((block: Block, i: number) => {
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

export default ExperienceDetail;
