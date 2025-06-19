"use client";

import React from "react";

import {
  TextSequence as ITextSequence,
  useTimelineStore,
} from "@/remotion/store";

import { Bold, Italic } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function TextTools({ sequence }: { sequence: ITextSequence }) {
  const updateTextConfig = useTimelineStore((s) => s.updateTextConfig);

  return (
    <div className="h-full w-full p-2 flex flex-col gap-6">
      {/* Font Style Controls */}
      <div className="flex items-center gap-4">
        <Button
          variant={sequence.config.isBold ? "default" : "outline"}
          size="sm"
          onClick={() =>
            updateTextConfig(sequence.id, {
              isBold: !sequence.config.isBold,
            })
          }
          className="flex items-center gap-2"
        >
          <Bold className="w-4 h-4" />
          Bold
        </Button>

        <Button
          variant={sequence.config.isItalic ? "default" : "outline"}
          size="sm"
          onClick={() =>
            updateTextConfig(sequence.id, {
              isItalic: !sequence.config.isItalic,
            })
          }
          className="flex items-center gap-2"
        >
          <Italic className="w-4 h-4" />
          Italic
        </Button>
      </div>

      {/* Color Picker */}
      <div className="space-y-2">
        <Label htmlFor="color-input">Text Color</Label>
        <div className="flex items-center gap-2">
          <Input
            id="color-input"
            type="text"
            value={sequence.config.color}
            onChange={(e) =>
              updateTextConfig(sequence.id, {
                color: e.target.value,
              })
            }
            className="font-mono"
            placeholder="#FFFFFF"
          />
          <div
            className="w-9 h-9 rounded-lg border-2 border-gray-300 cursor-pointer"
            style={{ backgroundColor: sequence.config.color }}
            onClick={() => document.getElementById("color-picker")?.click()}
          />
          <input
            id="color-picker"
            type="color"
            value={sequence.config.color}
            onChange={(e) =>
              updateTextConfig(sequence.id, {
                color: e.target.value,
              })
            }
            className="sr-only"
          />
        </div>
      </div>

      <Separator className="my-4" />

      {/* Layout Section */}
      <div>
        <h3 className="text-sm font-medium mb-3">Layout</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Top */}
          <div className="space-y-2">
            <Label htmlFor="layout-top" className="text-xs text-gray-600">
              Top
            </Label>
            <Input
              id="layout-top"
              type="number"
              min="-1000"
              max="1000"
              value={sequence.config.pos?.top}
              onChange={(e) =>
                updateTextConfig(sequence.id, {
                  pos: {
                    ...sequence.config.pos,
                    top: Number(e.target.value),
                  },
                })
              }
              className="text-sm"
              placeholder="0"
            />
          </div>

          {/* Right */}
          <div className="space-y-2">
            <Label htmlFor="layout-right" className="text-xs text-gray-600">
              Right
            </Label>
            <Input
              id="layout-right"
              type="number"
              min="-1000"
              max="1000"
              value={sequence.config.pos?.right}
              onChange={(e) =>
                updateTextConfig(sequence.id, {
                  pos: {
                    ...sequence.config.pos,
                    right: Number(e.target.value),
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
              Left
            </Label>
            <Input
              id="layout-left"
              type="number"
              min="-1000"
              max="1000"
              value={sequence.config.pos?.left}
              onChange={(e) =>
                updateTextConfig(sequence.id, {
                  pos: {
                    ...sequence.config.pos,
                    left: Number(e.target.value),
                  },
                })
              }
              className="text-sm"
              placeholder="0"
            />
          </div>

          {/* Bottom */}
          <div className="space-y-2">
            <Label htmlFor="layout-bottom" className="text-xs text-gray-600">
              Bottom
            </Label>
            <Input
              id="layout-bottom"
              type="number"
              min="-1000"
              max="1000"
              value={sequence.config.pos?.bottom}
              onChange={(e) =>
                updateTextConfig(sequence.id, {
                  pos: {
                    ...sequence.config.pos,
                    bottom: Number(e.target.value),
                  },
                })
              }
              className="text-sm"
              placeholder="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
