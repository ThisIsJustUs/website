import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getPost } from "@/app/(blog)/writing/_sanity/queries";
import { BlogContent } from "../_components/blog-content";

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
    <main className="overflow-hidden">
      <BlogContent post={post} />
    </main>
  );
}
