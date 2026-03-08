import { ProjectData, Block } from "@/data/projects";

// ─── Image block ──────────────────────────────────────────────────────────────
// Multiple images sit side by side at the same height (400px max).
// Narrow/portrait images are capped — they won't stretch to fill.
const ImageBlock = ({ images }: { images: string[] }) => {
  if (images.length === 0) return null;
  const ROW_HEIGHT = 400;

  return (
    <div className="flex gap-2 w-full overflow-hidden" style={{ maxHeight: ROW_HEIGHT }}>
      {images.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-md border border-border"
          style={{
            height: ROW_HEIGHT,
            flex: "1 1 0",
            minWidth: 0,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

// ─── Project detail body ──────────────────────────────────────────────────────
// Layout: two-column grid — left: summary + bullets, right: square cover.
// Left column text stays within its column even if it overflows the image height.
// Bullets never wrap under the image.
const ProjectDetail = ({ project }: { project: ProjectData }) => {
  const COVER_SIZE = 250;

  return (
    <div className="space-y-6 mt-2">
      {/* Header: bullets left, cover right — independent columns */}
      <div className="grid gap-6" style={{ gridTemplateColumns: `1fr ${COVER_SIZE}px` }}>
        {/* Left: summary + bullets — stays in this column always */}
        <div className="space-y-4 min-w-0">
          <p className="text-foreground text-base">{project.summary}</p>
          <ul className="space-y-2 text-base text-muted-foreground list-disc list-inside">
            {project.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Right: square cover */}
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

      {/* Rich content blocks below */}
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
