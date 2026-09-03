"use client";

import { useId, useState, type ReactNode } from "react";

type EbookVolumeDetailsProps = {
  expandLabel: string;
  collapseLabel: string;
  children: ReactNode;
};

export function EbookVolumeDetails({
  expandLabel,
  collapseLabel,
  children,
}: EbookVolumeDetailsProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="mt-4">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="text-left text-[13px] font-medium text-foreground underline-offset-4 hover:underline"
      >
        {open ? collapseLabel : expandLabel}
      </button>
      <div id={panelId} hidden={!open} className="mt-4 space-y-3">
        {children}
      </div>
    </div>
  );
}
