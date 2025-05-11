import { Suspense } from "react";

import { api } from "@/trpc/server";
import { WritingListItem } from "./_components/writing-list-item";

export const metadata = {
  title: "Writing | Justus Hebenstreit",
  description:
    "Articles and thoughts on technology, software development, and more.",
};

const writings = [
  {
    title: "Team communication is broken",
    date: new Date("2024-08-08"),
    slug: "team-communication-is-broken",
  },
  {
    title: "Framer Sites first impressions",
    date: new Date("2022-02-19"),
    slug: "framer-sites-first-impressions",
  },
  {
    title: "Design critique for fun and profit",
    date: new Date("2022-02-05"),
    slug: "design-critique-for-fun-and-profit",
  },
  {
    title: "The Side Project Prophecy",
    date: new Date("2022-01-17"),
    slug: "the-side-project-prophecy",
  },
];

export default async function WritingPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 font-bold text-4xl">Writing</h1>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="divide-y divide-border">
            {writings.map((writing) => (
              <div key={writing.slug} className="py-4">
                <WritingListItem
                  title={writing.title}
                  date={writing.date}
                  slug={writing.slug}
                />
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
}
