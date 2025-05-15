import { SidebarTrigger } from "@/components/ui/sidebar";
import { Posts } from "./_components/posts";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Blog() {
  return (
    <main className="bg-white md:bg-slate-50 dark:bg-neutral-900 md:dark:bg-neutral-950">
      <SidebarTrigger className="mt-4 ml-4 bg-slate-50 md:hidden dark:bg-neutral-900" />
      <div className="flex min-h-screen flex-row">
        <div className="min-h-full w-lg border-gray-200 border-r bg-white md:bg-slate-50 dark:border-gray-800 dark:bg-neutral-900 md:dark:bg-neutral-900">
          <div className="px-4 pt-8 md:px-9">
            <h1 className="font-bold text-slate-900 text-xl dark:text-neutral-100">
              Writing
            </h1>
          </div>
          <Posts />
        </div>
        {/* Dot pattern background */}
        <div
          className="hidden min-h-full w-full bg-white md:block dark:bg-neutral-950"
          style={
            {
              "--dot-color": "#e2e8f0",
              "--dot-color-dark": "#1e293b",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, var(--dot-color) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            } as React.CSSProperties
          }
          data-dot-bg
        />
      </div>
    </main>
  );
}
