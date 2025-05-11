"use client";

import { format } from "date-fns";
import Link from "next/link";

interface WritingListItemProps {
  title: string;
  date: Date;
  slug: string;
}

export function WritingListItem({ title, date, slug }: WritingListItemProps) {
  return (
    <Link href={`/writing/${slug}`} className="group block">
      <div className="space-y-1 px-4">
        <h2 className="font-medium text-foreground transition-colors group-hover:text-primary">
          {title}
        </h2>
        <p className="text-muted-foreground text-sm">
          {format(date, "MMMM d, yyyy")}
        </p>
      </div>
    </Link>
  );
}
