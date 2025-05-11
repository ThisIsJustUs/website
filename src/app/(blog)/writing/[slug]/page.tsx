import { PortableText } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { image } from "@/app/(blog)/writing/_sanity/image";
import { getPost } from "@/app/(blog)/writing/_sanity/queries";
import { Container } from "../_components/container";
import { Subheading } from "../_components/text";
import { format } from "date-fns";

export async function generateMetadata(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  { params }: { params: any }, // 👈  now always OK
): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default async function Post({ params }: { params: any }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="overflow-hidden">
      <Container>
        <div className="text-gray-700">
          <div className="max-w-2xl xl:mx-auto">
            <Subheading className="mt-16">
              {format(post.publishedAt, "dddd, MMMM M, yyyy")}
            </Subheading>
            <h1 className="text-pretty font-medium text-3xl text-gray-950 tracking-tighter data-[dark]:text-white">
              {post.title}
            </h1>
            {post.mainImage && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt={post.mainImage.alt ?? ""}
                src={image(post.mainImage).size(2016, 1344).url()}
                className="mb-10 aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
              />
            )}
            {post.body && (
              <PortableText
                value={post.body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="my-10 text-base/8 first:mt-0 last:mb-0">
                        {children}
                      </p>
                    ),
                    h2: ({ children }) => (
                      <h2 className="mt-12 mb-10 font-medium text-2xl/8 text-gray-950 tracking-tight first:mt-0 last:mb-0">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="mt-12 mb-10 font-medium text-gray-950 text-xl/8 tracking-tight first:mt-0 last:mb-0">
                        {children}
                      </h3>
                    ),
                    blockquote: ({ children }) => (
                      <blockquote className="my-10 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
                        {children}
                      </blockquote>
                    ),
                  },
                  types: {
                    image: ({ value }: { value: { alt: string } }) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        alt={value.alt ?? ""}
                        src={image(value).width(2000).url()}
                        className="w-full rounded-2xl"
                      />
                    ),
                    separator: ({ value }: { value: { style: string } }) => {
                      switch (value.style) {
                        case "line":
                          return (
                            <hr className="my-8 border-gray-200 border-t" />
                          );
                        case "space":
                          return <div className="my-8" />;
                        default:
                          return null;
                      }
                    },
                  },
                  list: {
                    bullet: ({ children }) => (
                      <ul className="list-disc pl-4 text-base/8 marker:text-gray-400">
                        {children}
                      </ul>
                    ),
                    number: ({ children }) => (
                      <ol className="list-decimal pl-4 text-base/8 marker:text-gray-400">
                        {children}
                      </ol>
                    ),
                  },
                  listItem: {
                    bullet: ({ children }) => {
                      return (
                        <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                      );
                    },
                    number: ({ children }) => {
                      return (
                        <li className="my-2 pl-2 has-[br]:mb-8">{children}</li>
                      );
                    },
                  },
                  marks: {
                    strong: ({ children }) => (
                      <strong className="font-semibold text-gray-950">
                        {children}
                      </strong>
                    ),
                    code: ({ children }) => (
                      <>
                        <span aria-hidden>`</span>
                        <code className="font-semibold text-[15px]/8 text-gray-950">
                          {children}
                        </code>
                        <span aria-hidden>`</span>
                      </>
                    ),
                    link: ({ value, children }) => {
                      return (
                        <Link
                          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                          href={value.href}
                          className="font-medium text-gray-950 underline decoration-gray-400 underline-offset-4 data-[hover]:decoration-gray-600"
                        >
                          {children}
                        </Link>
                      );
                    },
                  },
                }}
              />
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
