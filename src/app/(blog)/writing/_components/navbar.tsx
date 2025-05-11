"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { cn, isProduction } from "@/lib/utils";

import { LogoIcon } from "@/components/icons/Logo";
import { Button } from "@workspace/ui/components/button";

import WaitlistDialog from "./waitlist-dialog";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const inProduction = isProduction();

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-2 z-50 flex h-16 rounded-full px-6 transition-shadow duration-200",
        "items-center bg-white shadow-sm dark:bg-neutral-900",
        isScrolled &&
          "bg-white/70 shadow-md backdrop-blur-md dark:bg-neutral-900/70",
      )}
    >
      <div className="flex w-full items-center space-x-5">
        {/* Logo */}
        <Link href="/homepage">
          <span className="text-md flex flex-row items-center font-bold tracking-tight text-gray-800 sm:text-xl dark:text-gray-100">
            <LogoIcon className="mr-2" />
            Ellaa
          </span>
        </Link>
        {/* Nav */}
        <nav className="flex items-center text-xs font-medium text-gray-600 sm:text-sm dark:text-gray-300">
          <Link
            href="/blog"
            className="inline-flex h-10 items-center rounded-full px-3 transition-colors hover:bg-slate-100 hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-gray-50"
          >
            News
          </Link>
          <Link
            href="/story"
            className="inline-flex h-10 items-center rounded-full px-3 transition-colors hover:bg-slate-100 hover:text-gray-900 dark:hover:bg-slate-700 dark:hover:text-gray-50"
          >
            Story
          </Link>
        </nav>
        {/* Button (push to far right) */}
        {inProduction ? (
          <div className="ml-auto">
            <WaitlistDialog>
              <Button
                variant="outline"
                className={cn(
                  "flex h-10 items-center rounded-full px-4 transition-colors duration-200",
                  !isScrolled &&
                    "bg-white text-black hover:bg-gray-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
                  isScrolled &&
                    "bg-green-500 text-white hover:bg-green-900 dark:text-black",
                )}
              >
                Join Waitlist
              </Button>
            </WaitlistDialog>
          </div>
        ) : (
          <Link href="/sign-up" className="ml-auto">
            <Button
              variant="outline"
              className={cn(
                "flex h-10 items-center rounded-full px-4 transition-colors duration-200",
                !isScrolled &&
                  "bg-white text-black hover:bg-gray-100 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
                isScrolled &&
                  "bg-green-500 text-white hover:bg-green-900 dark:text-black",
              )}
            >
              Sign up
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
