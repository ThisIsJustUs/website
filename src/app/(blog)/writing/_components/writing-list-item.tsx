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
        className={`space-y-1 rounded-xl px-4 py-4 transition-colors md:px-6 ${
          isActive
            ? "bg-black dark:bg-neutral-800"
            : "hover:bg-slate-200 dark:hover:bg-neutral-800"
        }`}
      >
        <h2
          className={`transition-colors ${
            isActive
              ? "font-semibold text-white dark:text-neutral-100"
              : "font-normal text-slate-800 group-hover:text-primary dark:text-neutral-300"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm ${
            isActive
              ? "text-slate-300 dark:text-neutral-400"
              : "font-light text-slate-400 dark:text-neutral-500"
          }`}
        >
          {format(date, "MMMM d, yyyy")}
        </p>
        {excerpt && (
          <p
            className={`line-clamp-2 text-sm ${
              isActive
                ? "text-slate-400 dark:text-neutral-500"
                : "text-slate-500 dark:text-neutral-400"
            }`}
          >
            {excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
