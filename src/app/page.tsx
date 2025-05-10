"use server";

import { Button } from "@/components/ui/button";
import { HydrateClient, api } from "@/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="font-bold text-4xl">Justus Hebenstreit</h1>
        <Button>Click me</Button>
      </main>
    </HydrateClient>
  );
}
