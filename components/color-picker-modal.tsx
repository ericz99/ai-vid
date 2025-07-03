"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Sketch } from "@uiw/react-color";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useTimelineStore } from "@/remotion/store";

export function ColorPickerButton({
  type,
  children,
}: {
  type: string;
  children: React.ReactNode;
}) {
  const captionPreset = useTimelineStore((s) => s.captionPreset);
  const updateCaptionPreset = useTimelineStore((s) => s.updateCaptionPreset);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-fit">
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>X</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>

        <Sketch
          color={
            type === "mainColor"
              ? captionPreset.mainColor
              : captionPreset.activeColor
          }
          onChange={(newColor) => {
            if (type === "mainColor") {
              updateCaptionPreset({
                mainColor: newColor.hex,
              });
            } else if (type === "activeColor") {
              updateCaptionPreset({
                activeColor: newColor.hex,
              });
            }
          }}
        />
      </DialogContent>
    </Dialog>
  );
}
