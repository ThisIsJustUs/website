import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { TRPCReactProvider } from "@/trpc/react";
import Dock from "./_components/dock";

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
    <html lang="en" className={`${geist.variable} overscroll-none`}>
      <body className="overscroll-none bg-slate-50">
        <TRPCReactProvider>
          {/* <SidebarProvider> */}
          {/* <AppSidebar /> */}
          <main>{children}</main>
          <Analytics />
          <Dock />
          {/* </SidebarProvider> */}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
