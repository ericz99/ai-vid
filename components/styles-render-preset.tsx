"use client";

import React, { useMemo, useState } from "react";
import { PRESET_STYLES, getStylePreset } from "@/remotion/captions";
import { useTimelineStore } from "@/remotion/store";
import { Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ColorPickerButton } from "@/components/color-picker-modal";

export function StylesRenderPreset() {
  const [hoverPresetId, setHoverPresetId] = useState<string | null>(null);
  const captionPreset = useTimelineStore((s) => s.captionPreset);
  const setCaptionPreset = useTimelineStore((s) => s.setCaptionPreset);
  const updateCaptionPreset = useTimelineStore((s) => s.updateCaptionPreset);

  const selectedPreset = useMemo(() => {
    return getStylePreset(captionPreset.id);
  }, [captionPreset]);

  return (
    <div className="flex flex-col relative h-full">
      <div className="flex-1 p-2">
        <div className="grid grid-cols-3 gap-1">
          {PRESET_STYLES.map((preset) => {
            const previewStyle = {
              fontFamily: preset.fontFamily,
              fontWeight: preset.fontWeight.toLowerCase(),
              textTransform: preset.uppercase ? "uppercase" : "none",
              fontSize: 24,
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
                onClick={() => setCaptionPreset(preset)}
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

      <div className="p-3 border-t flex gap-4 justify-center">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-xs font-medium text-zinc-500">Position Y</h2>

          <div className="flex gap-2 relative max-w-16 w-full">
            <Input
              type="text"
              inputMode="decimal"
              value={captionPreset.positionY}
              onChange={(e) => {
                updateCaptionPreset({
                  positionY: Number(e.target.value),
                });
              }}
              min={0}
              max={80}
              step={2}
              className="text-lg"
            />

            <span className="absolute right-2 top-1 text-lg select-none">
              %
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-xs font-medium text-zinc-500">Font Size</h2>

          <div className="flex gap-2 relative max-w-16 w-full">
            <Input
              type="text"
              inputMode="decimal"
              className="text-lg"
              value={captionPreset.fontSize}
              onChange={(e) => {
                updateCaptionPreset({
                  fontSize: Number(e.target.value),
                });
              }}
            />

            <span className="absolute right-2 top-1 text-lg select-none">
              px
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-xs font-medium text-zinc-500">Main</h2>

          <div className="flex gap-2 relative">
            <ColorPickerButton type="mainColor">
              <div
                className={`w-10 h-10 bg-[${captionPreset.mainColor}] rounded-md border-2`}
                style={{
                  backgroundColor: captionPreset.mainColor,
                }}
              />
            </ColorPickerButton>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-xs font-medium text-zinc-500">Active</h2>

          <div className="flex gap-2 relative">
            <ColorPickerButton type="activeColor">
              <div
                className={`w-10 h-10 bg-[${captionPreset.activeColor}] rounded-md border-2`}
                style={{
                  backgroundColor: captionPreset.activeColor,
                }}
              />
            </ColorPickerButton>
          </div>
        </div>
      </div>
    </div>
  );
}
