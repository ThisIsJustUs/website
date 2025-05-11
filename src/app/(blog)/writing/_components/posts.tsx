"use server";

import { getPosts } from "../_sanity/queries";
import type { Post } from "../_sanity/types";
import { WritingListItem } from "./writing-list-item";

export async function Posts() {
  const posts = await getPosts(0, 5);

  if (posts.length === 0) {
    return <p className="mt-6 text-gray-500">No posts found.</p>;
  }

  return (
    <div className="w-full md:w-lg">
      <div className="mt-6 w-full px-4 py-2">
        {posts.map((post: Post) => (
          <div key={post.slug?.toString()} className="py-1">
            <WritingListItem
              title={post.title ?? ""}
              date={post.publishedAt ? new Date(post.publishedAt) : new Date()}
              slug={post.slug?.toString() ?? ""}
              excerpt={post.excerpt ?? ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
