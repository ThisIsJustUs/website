"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const themes = [
    { name: "system", icon: <Monitor className="h-4 w-4" />, label: "System" },
    { name: "light", icon: <Sun className="h-4 w-4" />, label: "Light" },
    { name: "dark", icon: <Moon className="h-4 w-4" />, label: "Dark" },
  ];

  return (
    <div className="flex w-full justify-center gap-2">
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
