"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export function BackButton() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <button
      type="button"
      onClick={() => router.push("/writing")}
      className={`fixed top-4 left-4 z-50 rounded-full border bg-background/80 p-2 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-background/90 md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-16 opacity-0"
      }`}
      aria-label="Go back to writing"
    >
      <ArrowLeft className="h-5 w-5" />
    </button>
  );
}
