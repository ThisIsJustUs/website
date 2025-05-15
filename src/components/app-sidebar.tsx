"use client";

import {
  BookOpen,
  SquareTerminal,
  Folder,
  Home,
  BookMarked,
} from "lucide-react";
import Image from "next/image";
import type * as React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSocial } from "@/components/nav-social";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

import logoGithub from "@/images/logos/github.svg";
import logoLinkedin from "@/images/logos/linkedin.svg";
import logoTwitter from "@/images/logos/twitter.svg";
import logoEllaa from "@/images/logos/ellaa-raw.svg";
import logoGithubDark from "@/images/logos/github-dark.svg";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const githubIcon = (
    <Image
      src={mounted && resolvedTheme === "dark" ? logoGithubDark : logoGithub}
      alt="GitHub"
      width={16}
      height={16}
    />
  );

  const data = {
    navMain: [
      {
        title: "Home",
        url: "/",
        icon: Home,
      },
      {
        title: "Writing",
        url: "/writing",
        icon: BookMarked,
      },
    ],
    projects: [
      {
        title: "Ellaa",
        url: "https://ellaa.app",
        icon: <Image src={logoEllaa} alt="Ellaa" width={16} height={16} />,
      },
    ],
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ThisIsJustUs",
        icon: githubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/justushebenstreit",
        icon: (
          <Image src={logoLinkedin} alt="LinkedIn" width={16} height={16} />
        ),
      },
      {
        name: "Twitter",
        url: "https://x.com/ThisIsJustUs",
        icon: <Image src={logoTwitter} alt="X" width={16} height={16} />,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent className="bg-white px-1 md:bg-slate-50 dark:bg-neutral-900 md:dark:bg-neutral-900">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSocial social={data.social} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
