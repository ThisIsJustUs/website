import { notFound } from "next/navigation";

import { Container } from "./_components/container";
import { Heading, Lead, Subheading } from "./_components/text";
import { Posts } from "./_components/posts";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Blog() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Posts />
    </main>
  );
}
