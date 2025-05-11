"use client";

import * as React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

import { LogoIcon } from "@/components/icons/Logo";
import { Button } from "@workspace/ui/components/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu";
import { Separator } from "@workspace/ui/components/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet";

export function Navigation({
  isAuthenticated = false,
}: { isAuthenticated?: boolean }) {
  return (
    <div className="sticky top-4 z-50 w-full max-w-xs space-x-2 rounded-full border border-slate-300 bg-white bg-opacity-70 px-2 py-2 backdrop-blur-xl lg:block lg:w-auto lg:max-w-max">
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className="flex items-center rounded-full bg-transparent">
                <LogoIcon className="w-12" />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="rounded-md bg-transparent">
              Features
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle({
                  className: "rounded-md bg-transparent",
                })}
              >
                Story
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {!isAuthenticated && (
            <NavigationMenuItem>
              <Link href="/sign-in" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className: "rounded-full bg-slate-950 text-slate-50",
                  })}
                >
                  Sign In
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <Sheet>
        <div className="flex w-full justify-between pr-2 lg:hidden">
          <Link href="/" legacyBehavior passHref>
            <div className="flex items-center rounded-full bg-transparent">
              {/* <LogoIcon className="w-12" /> */}
            </div>
          </Link>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>

        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              {/* <LogoIcon className="w-full" /> */}
              <span className="sr-only">Ellaa</span>
            </Link>
            <Link
              href="/story"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              Story
            </Link>
            <Separator className="my-4" />
            <Link
              href="/auth/sign-in"
              className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
            >
              Sign in
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
