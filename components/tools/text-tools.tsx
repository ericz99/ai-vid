"use client";

import React, { useMemo } from "react";
import {
  TextSequence as ITextSequence,
  useTimelineStore,
} from "@/remotion/store";

export function TextTools() {
  const selectedId = useTimelineStore((s) => s.selectedSequenceId);
  const sequences = useTimelineStore((s) => s.sequences);

  const seq = useMemo(() => {
    return sequences[selectedId!] as ITextSequence;
  }, [selectedId, sequences]);

  return <div className="h-full w-full p-2">SequenceTools</div>;
}
