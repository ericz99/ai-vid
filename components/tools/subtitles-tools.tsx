"use client";

import React from "react";

import { useTimelineStore } from "@/remotion/store";

import { Bold, Italic } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CaptionPreview } from "./text-presets-preview";

export function SubtitlesTools() {
  const captionTextConfig = useTimelineStore((s) => s.captionTextConfig);
  const updateSubtitleConfig = useTimelineStore((s) => s.updateSubtitleConfig);

  return (
    <div className="h-full w-full p-4 flex flex-col gap-6">
      {/* Font Style Controls */}
      <div className="flex items-center gap-4">
        <Button
          variant={captionTextConfig.isBold ? "default" : "outline"}
          size="sm"
          onClick={() =>
            updateSubtitleConfig({
              isBold: !captionTextConfig.isBold,
            })
          }
          className="flex items-center gap-2"
        >
          <Bold className="w-4 h-4" />
          Bold
        </Button>

        <Button
          variant={captionTextConfig.isItalic ? "default" : "outline"}
          size="sm"
          onClick={() =>
            updateSubtitleConfig({
              isItalic: !captionTextConfig.isItalic,
            })
          }
          className="flex items-center gap-2"
        >
          <Italic className="w-4 h-4" />
          Italic
        </Button>
      </div>

      <div className="space-y-2 flex gap-2 justify-between">
        <div className="flex-1 flex flex-col gap-2">
          <Label htmlFor="font-size">Font Size</Label>
          <div className="flex items-center gap-2">
            <Input
              id="font-size"
              type="number"
              value={captionTextConfig.fontSize ?? 0}
              onChange={(e) =>
                updateSubtitleConfig({
                  fontSize: Number(e.target.value),
                })
              }
              className="font-size"
              placeholder="10"
            />
          </div>
        </div>

        {/* Color Picker */}
        <div className="space-y-2 flex-1">
          <Label htmlFor="color-input">Text Color</Label>
          <div className="flex items-center gap-2">
            <Input
              id="color-input"
              type="text"
              value={captionTextConfig.color ?? "#ffffff"}
              onChange={(e) =>
                updateSubtitleConfig({
                  color: e.target.value,
                })
              }
              className="font-mono"
              placeholder="#FFFFFF"
            />
            <div
              className="w-9 h-9 rounded-lg border-2 border-gray-300 cursor-pointer"
              style={{ backgroundColor: captionTextConfig.color }}
              onClick={() => document.getElementById("color-picker")?.click()}
            />
            <input
              id="color-picker"
              type="color"
              value={captionTextConfig.color ?? "#ffffff"}
              onChange={(e) =>
                updateSubtitleConfig({
                  color: e.target.value,
                })
              }
              className="sr-only"
            />
          </div>
        </div>

        <div className="space-y-2 flex-1">
          <Label htmlFor="color-input">Bounce Text Color</Label>
          <div className="flex items-center gap-2">
            <Input
              id="bounce-color-picker"
              type="text"
              value={captionTextConfig.bounceColor ?? "#ffffff"}
              onChange={(e) =>
                updateSubtitleConfig({
                  bounceColor: e.target.value,
                })
              }
              className="font-mono"
              placeholder="#FFFFFF"
            />
            <div
              className="w-9 h-9 rounded-lg border-2 border-gray-300 cursor-pointer"
              style={{ backgroundColor: captionTextConfig.bounceColor }}
              onClick={() => document.getElementById("color-picker")?.click()}
            />
            <input
              id="bounce-color-picker"
              type="color"
              value={captionTextConfig.bounceColor ?? "#ffffff"}
              onChange={(e) =>
                updateSubtitleConfig({
                  bounceColor: e.target.value,
                })
              }
              className="sr-only"
            />
          </div>
        </div>
      </div>

      <Separator className="my-4" />

      {/* Layout Section */}
      <div>
        <h3 className="text-lg font-medium mb-3">Layout</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Top */}
          <div className="space-y-2">
            <Label htmlFor="layout-top" className="text-xs text-gray-600">
              Top / Bottom
            </Label>

            <span className="text-sm">{captionTextConfig.pos?.top ?? 0}</span>

            <Input
              id="layout-top"
              type="range"
              min="-1000"
              max="1000"
              step="1"
              value={captionTextConfig.pos?.top ?? 0}
              onChange={(e) =>
                updateSubtitleConfig({
                  pos: {
                    ...captionTextConfig.pos,
                    top: Number(e.target.value),
                  },
                })
              }
              className="text-sm"
              placeholder="0"
            />
          </div>

          {/* Left */}
          <div className="space-y-2">
            <Label htmlFor="layout-left" className="text-xs text-gray-600">
              Left / Right
            </Label>

            <span className="text-sm">{captionTextConfig.pos?.left ?? 0}</span>

            <Input
              id="layout-left"
              type="range"
              min="-1000"
              max="1000"
              value={captionTextConfig.pos?.left ?? 0}
              onChange={(e) =>
                updateSubtitleConfig({
                  pos: {
                    ...captionTextConfig.pos,
                    left: Number(e.target.value),
                  },
                })
              }
              className="text-sm"
              placeholder="0"
            />
          </div>
        </div>
      </div>

      {/* PRESET TEXT */}

      <Separator className="my-4" />

      <div className="flex flex-col gap-4">
        <Accordion type="multiple" className="space-y-4">
          <AccordionItem
            value="text-preset"
            className="border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline group [&[data-state=open]]:border-b [&[data-state=open]]:border-border/50">
              Text Preset
            </AccordionTrigger>
            <AccordionContent>
              <CaptionPreview
                onSelect={(preset: string) =>
                  updateSubtitleConfig({
                    captionTextPreset: preset,
                  })
                }
                selectedPreset={captionTextConfig.captionTextPreset}
              />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="text-animation"
            className="border border-border/50 rounded-xl bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline group [&[data-state=open]]:border-b [&[data-state=open]]:border-border/50">
              Animation
            </AccordionTrigger>
            <AccordionContent>Animation...</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
