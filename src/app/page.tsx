"use server";

import { Resume } from "@/app/_components/resume";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Home() {
  return (
    <>
      <SidebarTrigger className="mt-4 ml-4 md:hidden" />
      <main className="flex min-h-screen flex-col items-center justify-center py-12 md:py-0">
        <div className="mx-auto w-full max-w-3xl px-4 pb-10 md:px-8">
          <div className="prose dark:prose-invert space-y-4 font-light text-slate-800 dark:text-neutral-200">
            <p>
              Hey, I'm Justus. I'm a product manager, fintech fan, and weekend
              app-builder. Right now I'm at{" "}
              <a
                href="https://deel.com"
                className="text-blue-600 dark:text-blue-400"
              >
                Deel
              </a>
              , where I shape the onboarding and verification tools—things like
              KYC checks and background reports that help companies hire anyone,
              anywhere, without the red tape.
            </p>
            <p>
              Before Deel, I built personal-finance apps at{" "}
              <a
                href="http://selinafinance.co.uk"
                className="text-blue-600 dark:text-blue-400"
              >
                Selina Finance
              </a>
              , making it easier for people to see where their money goes and
              how to grow it.
            </p>
            <p>
              On the side, I'm bootstrapping{" "}
              <a
                href="https://ellaa.app"
                className="text-blue-600 dark:text-blue-400"
              >
                Ellaa.app
              </a>
              , a simple tool that keeps product teams on top of real customer
              insights (because guessing is a terrible strategy).
            </p>
            <p>
              I believe good products feel obvious, paperwork should stay
              hidden, and every launch should make someone's day a little
              easier.
            </p>
          </div>
        </div>
        <Resume />
      </main>
    </>
  );
}
