import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getPost } from "@/app/(blog)/writing/_sanity/queries";
import { BlogContent } from "../_components/blog-content";
import { BackButton } from "../_components/back-button";
import { Posts } from "../_components/posts";

export async function generateMetadata({
  params,
}: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

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
      <div className="hidden min-h-full flex-row md:flex">
        <div className="min-h-full w-lg border-gray-200 border-r bg-slate-50">
          <div className="px-4 pt-8">
            <h1 className="font-bold text-xl">Writing</h1>
          </div>
          <Posts />
        </div>
        <div className="min-h-full w-full justify-center overflow-y-auto bg-white">
          <BlogContent post={post} />
        </div>
      </div>
    </main>
  );
}
