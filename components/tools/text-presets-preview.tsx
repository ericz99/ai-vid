"use client";

import type React from "react";
import { captionPresets } from "@/remotion/presets/text/preset";
import { StyledCaption } from "@/remotion/presets/text/index";
import { cn } from "@/lib/utils";

interface CaptionPreviewProps {
  sampleText?: string;
  onSelect: (preset: string) => void;
  selectedPreset?: string | null;
}

export const CaptionPreview: React.FC<CaptionPreviewProps> = ({
  sampleText = "Today we're going to learn to add captions to an",
  onSelect,
  selectedPreset,
}) => {
  return (
    <div className="w-full grid grid-cols-2">
      {captionPresets.map((preset) => (
        <div
          key={preset.id}
          className={cn(
            "flex flex-col gap-4 relative p-4 rounded-lg cursor-pointer",
            selectedPreset === preset.id &&
              "border-2 rounded-md border-zinc-500"
          )}
          onClick={() => onSelect(preset.id)}
        >
          {/* Preset Name */}
          <h3 className="font-semibold text-lg text-center text-black">
            {preset.name}
          </h3>

          {/* Preview Container */}
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center p-3 mb-3 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <StyledCaption
                text={sampleText}
                presetId={preset.id}
                customStyle={{
                  fontSize: "12px",
                  maxWidth: "100%",
                  wordWrap: "break-word",
                  hyphens: "auto",
                  width: "fit-content",
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
