"use client";

import React from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useTimelineStore } from "@/remotion/store";
import { Separator } from "./ui/separator";
import { SubtitlesTools } from "./tools/subtitles-tools";

export function Subtitles() {
  const enableCaptions = useTimelineStore((s) => s.enableCaptions);
  const setEnableCaptions = useTimelineStore((s) => s.setEnableCaptions);

  return (
    <div className="flex flex-col gap-8 p-2">
      <div className="mt-4 bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Label
              htmlFor="enable-feature"
              className="text-lg font-bold text-gray-900"
            >
              Enable Subtitles
            </Label>
            <span className="text-sm text-gray-500">
              Turn on to activate the subtitles
            </span>
          </div>
          <Switch
            id="enable-feature"
            checked={enableCaptions}
            onCheckedChange={setEnableCaptions}
          />
        </div>
      </div>

      <Separator />

      {enableCaptions && <SubtitlesTools />}
    </div>
  );
}
