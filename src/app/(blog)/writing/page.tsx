import { notFound } from "next/navigation";

import { Container } from "./_components/container";
import { Heading, Lead, Subheading } from "./_components/text";
import { Posts } from "./_components/posts";
import { getPost, getPosts } from "./_sanity/queries";
import { BlogContent } from "./_components/blog-content";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Blog() {
  // Get the first post to display
  const posts = await getPosts(0, 1);
  const post = posts[0]?.slug ? await getPost(posts[0].slug) : null;

  return (
    <main className="h-screen">
      <div className="flex min-h-full flex-row">
        <div className="min-h-full w-lg border-gray-200 border-r bg-slate-50">
          <div className="px-4 pt-8">
            <h1 className="font-bold text-xl">Writing</h1>
          </div>
          <Posts />
        </div>
        {/* Only show this on desktop  */}
        <div className="hidden min-h-full w-full justify-center overflow-y-auto md:flex">
          <BlogContent post={post} />
        </div>
      </div>
    </main>
  );
}
