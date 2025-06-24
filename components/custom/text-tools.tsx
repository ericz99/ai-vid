"use client";

import React from "react";

import { HighlightTextSequence, useTimelineStore } from "@/remotion/store";

import { Bold, Italic } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function HighlightTextTools({
  sequence,
}: {
  sequence: HighlightTextSequence;
}) {
  const updateHighlightSequence = useTimelineStore(
    (s) => s.updateHighlightSequence
  );

  return (
    <div className="h-full w-full p-2 flex flex-col gap-6">
      {/* Font Style Controls */}
      <div className="flex items-center gap-4">
        <Button
          variant={sequence.config?.isBold ? "default" : "outline"}
          size="sm"
          className="flex items-center gap-2"
          onChange={() => {
            updateHighlightSequence(sequence.id, {
              config: {
                ...sequence.config,
                isBold: !sequence.config?.isBold,
              },
            });
          }}
        >
          <Bold className="w-4 h-4" />
          Bold
        </Button>

        <Button
          variant={sequence.config?.isItalic ? "default" : "outline"}
          size="sm"
          className="flex items-center gap-2"
          onChange={() => {
            updateHighlightSequence(sequence.id, {
              config: {
                ...sequence.config,
                isItalic: !sequence.config?.isItalic,
              },
            });
          }}
        >
          <Italic className="w-4 h-4" />
          Italic
        </Button>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="font-size">Text</Label>
        <div className="flex items-center gap-2">
          <Input
            id="text"
            type="text"
            value={sequence.text}
            placeholder="Example Text"
            onChange={(e) => {
              updateHighlightSequence(sequence.id, {
                text: e.target.value,
              });
            }}
          />
        </div>
      </div>

      <div className="space-y-2 flex gap-2 justify-between">
        <div className="flex-1 flex flex-col gap-2">
          <Label htmlFor="font-size">Font Size</Label>
          <div className="flex items-center gap-2">
            <Input
              id="font-size"
              type="number"
              value={sequence.config?.fontSize ?? 0}
              className="font-size"
              placeholder="10"
              onChange={(e) => {
                updateHighlightSequence(sequence.id, {
                  config: {
                    ...sequence.config,
                    fontSize: Number(e.target.value),
                  },
                });
              }}
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
              value={sequence.config?.color ?? "#ffffff"}
              className="font-mono"
              placeholder="#FFFFFF"
              onChange={(e) => {
                updateHighlightSequence(sequence.id, {
                  config: {
                    ...sequence.config,
                    color: e.target.value,
                  },
                });
              }}
            />
            <div
              className="w-9 h-9 rounded-lg border-2 border-gray-300 cursor-pointer"
              style={{ backgroundColor: sequence.config?.color }}
              onClick={() => document.getElementById("color-picker")?.click()}
            />
            <input
              id="color-picker"
              type="color"
              value={sequence.config?.color ?? "#ffffff"}
              onChange={(e) => {
                updateHighlightSequence(sequence.id, {
                  config: {
                    ...sequence.config,
                    color: e.target.value,
                  },
                });
              }}
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

            <span className="text-sm">{sequence.config?.pos?.top ?? 0}</span>

            <Input
              id="layout-top"
              type="range"
              min="-1000"
              max="1000"
              step="1"
              value={sequence.config?.pos?.top ?? 0}
              className="text-sm"
              placeholder="0"
              onChange={(e) => {
                updateHighlightSequence(sequence.id, {
                  config: {
                    ...sequence.config,
                    top: Number(e.target.value),
                  },
                });
              }}
            />
          </div>

          {/* Left */}
          <div className="space-y-2">
            <Label htmlFor="layout-left" className="text-xs text-gray-600">
              Left / Right
            </Label>

            <span className="text-sm">{sequence.config?.pos?.left ?? 0}</span>

            <Input
              id="layout-left"
              type="range"
              min="-1000"
              max="1000"
              value={sequence.config?.pos?.left ?? 0}
              className="text-sm"
              placeholder="0"
              onChange={(e) => {
                updateHighlightSequence(sequence.id, {
                  config: {
                    ...sequence.config,
                    left: Number(e.target.value),
                  },
                });
              }}
            />
          </div>
        </div>
      </div>

      {/* PRESET TEXT */}

      <Separator className="my-4" />

      {/* <div className="flex flex-col gap-4">
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
                  updateTextSequence(sequence.id, {
                    preset,
                  })
                }
                selectedPreset={sequence.preset}
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
      </div> */}
    </div>
  );
}
