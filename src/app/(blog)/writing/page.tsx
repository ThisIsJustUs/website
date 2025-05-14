import { SidebarTrigger } from "@/components/ui/sidebar";
import { Posts } from "./_components/posts";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Blog() {
  return (
    <main className="bg-white md:bg-slate-50">
      <SidebarTrigger className="mt-4 ml-4 bg-slate-50 md:hidden" />
      <div className="flex min-h-screen flex-row">
        <div className="min-h-full w-lg border-gray-200 border-r bg-white md:bg-slate-50">
          <div className="px-4 pt-8 md:px-9">
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
