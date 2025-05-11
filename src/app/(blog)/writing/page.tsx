import { notFound } from "next/navigation";

import { Container } from "./_components/container";
import { Heading, Lead, Subheading } from "./_components/text";
import { Posts } from "./_components/posts";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Blog() {
  return (
    <main className="">
      <div className="px-4 pt-8">
        <h1 className="text-xl font-bold">Writing</h1>
      </div>
      <Posts />
    </main>
  );
}
