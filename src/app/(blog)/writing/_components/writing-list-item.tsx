"use client";

import { format } from "date-fns";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface WritingListItemProps {
  title: string;
  date: Date;
  slug: string;
  excerpt?: string;
}

export function WritingListItem({
  title,
  date,
  slug,
  excerpt,
}: WritingListItemProps) {
  const pathname = usePathname();
  const isActive = pathname === `/writing/${slug}`;

  return (
    <Link
      href={`/writing/${slug}`}
      className="group mb-1 block"
      prefetch={true}
    >
      <div
        className={`space-y-1 rounded-xl px-6 py-4 transition-colors ${
          isActive ? "bg-black" : "hover:bg-slate-200"
        }`}
      >
        <h2
          className={`transition-colors ${
            isActive
              ? "font-semibold text-white"
              : "font-normal text-slate-800 group-hover:text-primary"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm ${
            isActive ? "text-slate-300" : "font-light text-slate-400"
          }`}
        >
          {format(date, "MMMM d, yyyy")}
        </p>
        {excerpt && (
          <p
            className={`line-clamp-2 text-xs ${isActive ? "text-slate-400" : "text-slate-500"}`}
          >
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
