"use client";

import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
  }[];
}) {
  const pathname = usePathname();
  return (
    <SidebarGroup>
      <div className="p-2">
        <h2 className="font-medium text-slate-700 dark:text-neutral-200">
          Justus Hebenstreit
        </h2>
      </div>
      <SidebarGroupLabel>Me</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          let tooltipDescription = undefined;
          let tooltipKey = undefined;
          if (item.title === "Home") {
            tooltipDescription = "Go to Home";
            tooltipKey = "H";
          }
          if (item.title === "Writing") {
            tooltipDescription = "Go to Writing";
            tooltipKey = "W";
          }
          return (
            <SidebarMenuItem key={item.title}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <a href={item.url}>
                      {item.icon && (
                        <item.icon className="mr-3 text-slate-700 dark:text-neutral-200" />
                      )}
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </TooltipTrigger>
                {tooltipDescription && tooltipKey && (
                  <TooltipContent
                    side="right"
                    className="flex select-none items-center gap-2"
                  >
                    <span>{tooltipDescription}</span>
                    <span className="rounded border border-slate-300 bg-slate-100 px-1.5 py-0.5 font-mono text-slate-700 text-xs dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200">
                      {tooltipKey}
                    </span>
                  </TooltipContent>
                )}
              </Tooltip>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
