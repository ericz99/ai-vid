import type React from "react";

import { captionPresets } from "./preset";

interface StyledCaptionProps {
  text: string;
  presetId?: string;
  customStyle?: React.CSSProperties;
  className?: string;
}

export const StyledCaption: React.FC<StyledCaptionProps> = ({
  text,
  presetId = "classic-white",
  customStyle = {},
  className = "",
}) => {
  const preset =
    captionPresets.find((p) => p.id === presetId) || captionPresets[0];

  const combinedStyle = {
    ...preset.textStyle,
    ...customStyle,
  };

  return (
    <div style={combinedStyle} className={className}>
      {text}
    </div>
  );
};

// Helper function to get preset styles
export const getCaptionStyle = (presetId: string): React.CSSProperties => {
  const preset = captionPresets.find((p) => p.id === presetId);
  return preset ? preset.textStyle : captionPresets[0].textStyle;
};

// Helper function to get all preset IDs
export const getPresetIds = (): string[] => {
  return captionPresets.map((preset) => preset.id);
};
export { captionPresets };
