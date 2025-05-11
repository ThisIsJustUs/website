"use client";

import { PortableText } from "next-sanity";
import { format } from "date-fns";

import { Container } from "./container";
import { Subheading } from "./text";
import { image } from "../_sanity/image";
import type { Post } from "../_sanity/types";

interface BlogContentProps {
  post: Post | null;
}

export function BlogContent({ post }: BlogContentProps) {
  if (!post) {
    return (
      <div className="flex w-full items-center justify-center text-gray-500">
        No posts found
      </div>
    );
  }

  return (
    <Container>
      <div className="text-gray-700">
        <div className="max-w-2xl xl:mx-auto">
          <Subheading className="mt-16">
            {post.publishedAt
              ? format(new Date(post.publishedAt), "MMMM M, yyyy")
              : ""}
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
                    <p className="my-5 text-base/8 first:mt-0 last:mb-0">
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
                    <blockquote className="my-5 border-l-2 border-l-gray-300 pl-6 text-base/8 text-gray-950 first:mt-0 last:mb-0">
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
                        return <hr className="my-8 border-gray-200 border-t" />;
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
                      <a
                        href={value.href}
                        className="text-blue-500 decoration-gray-400 data-[hover]:decoration-gray-600"
                      >
                        {children}
                      </a>
                    );
                  },
                },
              }}
            />
          )}
        </div>
      </div>
    </Container>
  );
}
