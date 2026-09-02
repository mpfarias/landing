import Image from "next/image";
import type { ProjectMediaKind } from "@/data/projects";

type ProjectMediaProps = {
  src?: string | null;
  alt: string;
  kind?: ProjectMediaKind;
  caption?: string;
  priority?: boolean;
};

export function ProjectMedia({
  src,
  alt,
  kind = "image",
  caption,
  priority,
}: ProjectMediaProps) {
  if (!src) {
    if (process.env.NODE_ENV !== "development") return null;

    return (
      <figure
        data-dev-placeholder={kind}
        className="flex aspect-[16/10] items-center justify-center rounded-2xl border border-dashed border-border bg-background-secondary"
      >
        <figcaption className="px-4 text-center text-[11px] font-medium tracking-[0.16em] text-muted">
          DEV / {kind}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure>
      {kind === "video" ? (
        <video
          src={src}
          controls
          className="w-full rounded-2xl border border-border"
        >
          {alt}
        </video>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          className="h-auto w-full rounded-2xl border border-border"
        />
      )}
      {caption ? (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
