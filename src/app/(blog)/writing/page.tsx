import { notFound } from "next/navigation";

import { Container } from "./_components/container";
import { Heading, Lead, Subheading } from "./_components/text";
import { Posts } from "./_components/posts";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Blog() {
  return (
    <main className="h-screen">
      <div className="flex min-h-full flex-row">
        <div>
          <div className="px-4 pt-8">
            <h1 className="font-bold text-xl">Writing</h1>
          </div>
          <Posts />
        </div>
        <div className="flex min-h-full w-full items-center justify-center bg-red-500 text-4xl">
          Writing
        </div>
      </div>
    </main>
  );
}
