"use client";

import { BookMarked, Home, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import * as React from "react";
import { useEffect, useState } from "react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSocial } from "@/components/nav-social";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

import logoEllaa from "@/images/logos/ellaa-raw.svg";
import logoGithubDark from "@/images/logos/github-dark.svg";
import logoGithub from "@/images/logos/github.svg";
import logoLinkedin from "@/images/logos/linkedin.svg";
import logoTwitter from "@/images/logos/twitter.svg";

function ModeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const themes = [
    { name: "system", icon: <Monitor className="h-4 w-4" />, label: "System" },
    { name: "light", icon: <Sun className="h-4 w-4" />, label: "Light" },
    { name: "dark", icon: <Moon className="h-4 w-4" />, label: "Dark" },
  ];

  return (
    <div className="flex w-full gap-2 justify-center">
      {themes.map(({ name, icon, label }) => (
        <Button
          key={name}
          variant={theme === name ? "secondary" : "ghost"}
          className={`flex h-8 w-8 items-center justify-center rounded-md p-0 transition-colors${
            theme === name ? " text-primary" : ""
          }`}
          onClick={() => setTheme(name)}
          aria-label={label}
        >
          {icon}
        </Button>
      ))}
    </div>
  );
}

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
      <SidebarContent className="flex h-full flex-col bg-white px-1 md:bg-slate-50 dark:bg-neutral-900 md:dark:bg-neutral-900">
        <div>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
          <NavSocial social={data.social} />
        </div>
        <div className="mt-auto flex w-full justify-center pb-6">
          <ModeToggle />
        </div>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
