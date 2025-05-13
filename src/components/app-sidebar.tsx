"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import Image from "next/image";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import logoTwitter from "@/images/logos/twitter.svg";
import logoLinkedin from "@/images/logos/linkedin.svg";
import logoGithub from "@/images/logos/github.svg";

const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Writing",
      url: "/writing",
      icon: BookOpen,
    },
  ],
  projects: [
    {
      name: "GitHub",
      url: "https://github.com/ThisIsJustUs",
      icon: <Image src={logoGithub} alt="GitHub" width={16} height={16} />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/justushebenstreit",
      icon: <Image src={logoLinkedin} alt="LinkedIn" width={16} height={16} />,
    },
    {
      name: "X",
      url: "https://x.com/ThisIsJustUs",
      icon: <Image src={logoTwitter} alt="X" width={16} height={16} />,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
