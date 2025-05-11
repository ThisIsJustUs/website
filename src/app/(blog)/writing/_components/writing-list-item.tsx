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
    <Link href={`/writing/${slug}`} className="group block mb-1">
      <div
        className={`py-4 px-6 rounded-xl space-y-1 transition-colors ${
          isActive ? "bg-black" : "hover:bg-slate-200"
        }`}
      >
        <h2
          className={`transition-colors ${
            isActive
              ? "text-white font-semibold"
              : "text-slate-800 group-hover:text-primary font-normal"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm ${
            isActive ? "text-slate-300" : "text-slate-400 font-light"
          }`}
        >
          {format(date, "MMMM d, yyyy")}
        </p>
        {excerpt && (
          <p
            className={`text-xs line-clamp-2 ${isActive ? "text-slate-400" : "text-slate-500"}`}
          >
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
