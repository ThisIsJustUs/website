import { notFound } from "next/navigation";
import type { Metadata, ResolvingMetadata } from "next";

import { getPost } from "@/app/(blog)/writing/_sanity/queries";
import { BlogContent } from "../_components/blog-content";
import { BackButton } from "../_components/back-button";
import { Posts } from "../_components/posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Post({ params }: Props) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="h-screen">
      {/* Mobile View */}
      <div className="md:hidden">
        <BackButton />
        <BlogContent post={post} />
      </div>

      {/* Desktop View */}
      <div className="hidden h-full flex-row md:flex">
        {/* Posts List - Fixed width, scrollable */}
        <div className="h-full w-lg border-gray-200 border-r bg-slate-50 dark:border-gray-800 dark:bg-neutral-900">
          <div className="sticky top-0 z-10 bg-slate-50 px-9 pt-8 dark:bg-neutral-900">
            <h1 className="font-bold text-slate-900 text-xl dark:text-neutral-100">
              Writing
            </h1>
          </div>
          <div className="h-[calc(100%-4rem)] overflow-y-auto">
            <Posts />
          </div>
        </div>

        {/* Blog Content - Flexible width, scrollable */}
        <div className="h-full flex-1 overflow-y-auto bg-white dark:bg-neutral-950">
          <BlogContent post={post} />
        </div>
      </div>
    </main>
  );
}
