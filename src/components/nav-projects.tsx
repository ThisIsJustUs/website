"use client";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import type * as React from "react";

export function NavProjects({
  projects,
}: {
  projects: {
    title: string;
    url: string;
    icon?: React.ReactNode;
  }[];
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Projects</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map((project) => (
          <SidebarMenuItem key={project.title}>
            <SidebarMenuButton asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.icon && <span className="mr-3">{project.icon}</span>}
                <span className="text-slate-700 dark:text-slate-200">
                  {project.title}
                </span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
