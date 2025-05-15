import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import type { Metadata } from "next";
import { Geist } from "next/font/google";

import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const metadata: Metadata = {
  title: "Justus Hebenstreit",
  description: "Justus Hebenstreit's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} overscroll-none`}
      suppressHydrationWarning
    >
      <body className="overscroll-none bg-slate-50 dark:bg-slate-900">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem> */}
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <div className="flex flex-1 flex-col gap-4 pt-0">
                {children}
                {/* <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
