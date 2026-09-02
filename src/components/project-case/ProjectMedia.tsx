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
  if (!src) return null;

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
