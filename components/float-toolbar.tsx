"use client";

import type React from "react";
import { CaseSensitive, AlignLeft, Settings, FilmIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Navigation items with icons
const navItems = [
  {
    icon: FilmIcon,
    label: "Presets",
    href: "#",
  },
  {
    icon: AlignLeft,
    label: "B-rolls",
    href: "#",
  },
  {
    icon: CaseSensitive,
    label: "Subtitles",
    href: "#",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "#",
  },
];

export function FloatToolbar() {
  return (
    <Sidebar
      variant="floating"
      className="w-24 p-2"
      style={{ "--sidebar-width": "6rem" } as React.CSSProperties}
    >
      <SidebarContent className="overflow-hidden">
        <SidebarGroup className="px-2">
          <SidebarMenu className="gap-1">
            {navItems.map((item) => (
              <SidebarMenuItem key={item.label} className="w-full">
                <SidebarMenuButton
                  asChild
                  className="flex h-full w-full flex-col items-center justify-center gap-1 p-2"
                >
                  <a href={item.href} className="text-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-sidebar-accent">
                      <item.icon size={24} />
                    </div>
                    <span className="text-zinc-500">{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
