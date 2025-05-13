"use client";

import { motion } from "framer-motion";
import { type ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface DockProps {
  children: ReactNode;
  className?: string;
  iconSize?: number;
  iconMagnification?: number;
  iconDistance?: number;
  direction?: "left" | "right" | "middle";
}

interface DockIconProps {
  children: ReactNode;
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: number;
  className?: string;
}

export function DockIcon({
  children,
  size = 40,
  magnification = 60,
  distance = 140,
  mouseX = 0,
  className,
}: DockIconProps) {
  const [isHovered, setIsHovered] = useState(false);

  const calculateSize = () => {
    if (!isHovered) return size;
    const distanceFromMouse = Math.abs(mouseX - window.innerWidth / 2);
    if (distanceFromMouse > distance) return size;
    const scale = 1 - distanceFromMouse / distance;
    return size + (magnification - size) * scale;
  };

  return (
    <motion.div
      className={cn("flex items-center justify-center", className)}
      animate={{ width: calculateSize(), height: calculateSize() }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
}

export function Dock({
  children,
  className,
  iconSize = 40,
  iconMagnification = 60,
  iconDistance = 140,
  direction = "middle",
}: DockProps) {
  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseX(e.clientX);
  };

  return (
    <motion.div
      className={cn(
        "-translate-x-1/2 fixed bottom-4 left-1/2 flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-lg backdrop-blur-md",
        direction === "left" && "left-4 -translate-x-0",
        direction === "right" && "right-4 left-auto translate-x-0",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <DockIcon
              key={index}
              size={iconSize}
              magnification={iconMagnification}
              distance={iconDistance}
              mouseX={mouseX}
            >
              {child}
            </DockIcon>
          ))
        : children}
    </motion.div>
  );
}
