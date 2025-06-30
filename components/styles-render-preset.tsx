"use client";

import React, { useMemo, useState } from "react";
import { PRESET_STYLES, getStylePreset } from "@/remotion/captions";
import { useTimelineStore } from "@/remotion/store";
import { Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";

export function StylesRenderPreset() {
  const [hoverPresetId, setHoverPresetId] = useState<string | null>(null);
  const captionPresetId = useTimelineStore((s) => s.captionPresetId);
  const setCaptionPresetId = useTimelineStore((s) => s.setCaptionPresetId);

  const selectedPreset = useMemo(() => {
    return getStylePreset(captionPresetId);
  }, [captionPresetId]);

  return (
    <div className="flex flex-col relative h-full">
      <div className="flex-1 p-2">
        <div className="grid grid-cols-3 gap-1">
          {PRESET_STYLES.map((preset) => {
            const previewStyle = {
              fontFamily: preset.fontFamily,
              fontWeight: preset.fontWeight.toLowerCase(),
              textTransform: preset.uppercase ? "uppercase" : "none",
              fontSize: 18,
              color: preset.fontColor,
              paintOrder: "stroke",
              WebkitTextStroke: `${
                preset.strokeWeight === "None"
                  ? 0
                  : preset.strokeWeight === "Small"
                  ? 1
                  : preset.strokeWeight === "Medium"
                  ? 2
                  : 3
              }px ${preset.strokeColor}`,
              textShadow:
                preset.shadow === "None"
                  ? "none"
                  : `${
                      preset.shadow === "Small"
                        ? "1px 1px 2px"
                        : preset.shadow === "Medium"
                        ? "2px 2px 4px"
                        : "3px 3px 6px"
                    } rgba(0,0,0,0.5)`,
              lineHeight: 1.2,
            } as React.CSSProperties;

            if (preset.backgroundColor) {
              previewStyle["backgroundColor"] = preset.backgroundColor;
              previewStyle["padding"] = "0 6px";
              previewStyle["borderRadius"] = "6px";
            }

            return (
              <div
                key={preset.id}
                className={`relative p-0.5 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedPreset && selectedPreset.id === preset.id
                    ? "border-2 border-red-400"
                    : "border-2 border-transparent hover:border-red-500"
                }`}
                onClick={() => setCaptionPresetId(preset.id)}
                onMouseEnter={() => setHoverPresetId(preset.id)}
                onMouseLeave={() => setHoverPresetId(null)}
              >
                <div className="relative p-4 border rounded-lg bg-gray-800 min-h-[50px] flex items-center justify-center">
                  {/* Badges and controls */}
                  <div className="absolute top-2 left-2 flex items-center gap-1">
                    {preset.isNew && (
                      <Badge
                        variant="destructive"
                        className="text-[10px] h-4 w-8 rounded font-black"
                      >
                        New
                      </Badge>
                    )}
                  </div>

                  {/* Caption preview */}
                  <div className="text-center">
                    <div style={previewStyle} className={preset.className}>
                      {preset.name}
                    </div>
                  </div>

                  {preset.id === hoverPresetId && (
                    <div className="absolute right-3">
                      <Button
                        variant="secondary"
                        size="icon"
                        className="cursor-pointer h-6 w-6"
                      >
                        <Pen size={12} />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="py-6 px-2 border-t">preset</div>
    </div>
  );
}
