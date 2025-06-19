"use client";

import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "default" | "dots" | "pulse" | "bars";
  className?: string;
}

export default function LoadingSpinner({
  size = "md",
  variant = "default",
  className,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const renderSpinner = () => {
    switch (variant) {
      case "default":
        return (
          <Loader2
            className={cn(
              "animate-spin text-blue-600",
              sizeClasses[size],
              className
            )}
          />
        );

      case "dots":
        return (
          <div className={cn("flex space-x-1", className)}>
            <div
              className={cn(
                "bg-blue-600 rounded-full animate-bounce",
                size === "sm"
                  ? "w-1 h-1"
                  : size === "md"
                  ? "w-2 h-2"
                  : size === "lg"
                  ? "w-3 h-3"
                  : "w-4 h-4"
              )}
              style={{ animationDelay: "0ms" }}
            />
            <div
              className={cn(
                "bg-blue-600 rounded-full animate-bounce",
                size === "sm"
                  ? "w-1 h-1"
                  : size === "md"
                  ? "w-2 h-2"
                  : size === "lg"
                  ? "w-3 h-3"
                  : "w-4 h-4"
              )}
              style={{ animationDelay: "150ms" }}
            />
            <div
              className={cn(
                "bg-blue-600 rounded-full animate-bounce",
                size === "sm"
                  ? "w-1 h-1"
                  : size === "md"
                  ? "w-2 h-2"
                  : size === "lg"
                  ? "w-3 h-3"
                  : "w-4 h-4"
              )}
              style={{ animationDelay: "300ms" }}
            />
          </div>
        );

      case "pulse":
        return (
          <div
            className={cn(
              "bg-blue-600 rounded-full animate-pulse",
              sizeClasses[size],
              className
            )}
          />
        );

      case "bars":
        return (
          <div className={cn("flex space-x-1", className)}>
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={cn(
                  "bg-blue-600 animate-pulse",
                  size === "sm"
                    ? "w-0.5 h-3"
                    : size === "md"
                    ? "w-1 h-4"
                    : size === "lg"
                    ? "w-1.5 h-6"
                    : "w-2 h-8"
                )}
                style={{
                  animationDelay: `${i * 150}ms`,
                  animationDuration: "0.6s",
                }}
              />
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center">{renderSpinner()}</div>
  );
}
