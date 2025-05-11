import { Container } from "./_components/container";
import { Heading, Lead, Subheading } from "./_components/text";
import { Posts } from "./_components/posts";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Blog() {
  return (
    <main className="h-screen">
      <div className="flex min-h-full flex-row">
        <div className="min-h-full w-lg border-gray-200 border-r bg-slate-50">
          <div className="px-4 pt-8">
            <h1 className="font-bold text-xl">Writing</h1>
          </div>
          <Posts />
        </div>
        {/* Dot pattern background */}
        <div
          className="hidden min-h-full w-full bg-white md:block"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
    </main>
  );
}
