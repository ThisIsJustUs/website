"use client";

import { BookOpen, SquareTerminal, Folder } from "lucide-react";
import Image from "next/image";
import type * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSocial } from "@/components/nav-social";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

import logoGithub from "@/images/logos/github.svg";
import logoLinkedin from "@/images/logos/linkedin.svg";
import logoTwitter from "@/images/logos/twitter.svg";

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
      title: "Ellaa",
      url: "https://ellaa.app",
      icon: Folder,
    },
  ],
  social: [
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
      name: "Twitter",
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
        <NavSocial social={data.social} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
