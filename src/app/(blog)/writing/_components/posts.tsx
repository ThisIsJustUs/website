"use server";

import { ScrollArea } from "@/components/ui/scroll-area";
import { getPosts } from "../_sanity/queries";
import type { Post } from "../_sanity/types";
import { WritingListItem } from "./writing-list-item";

export async function Posts() {
  const posts = await getPosts(0, 5);

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <ScrollArea className="w-lg">
      <div className="mt-6 w-full">
        {posts.map((post: Post, index: number) => (
          <div
            key={post.slug?.toString()}
            className={`py-4 ${index !== posts.length - 1 ? "border-gray-200 border-b" : ""}`}
          >
            <WritingListItem
              title={post.title ?? ""}
              date={post.publishedAt ? new Date(post.publishedAt) : new Date()}
              slug={post.slug?.toString() ?? ""}
            />
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
