import "@/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import { TRPCReactProvider } from "@/trpc/react";

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
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>
          {/* <SidebarProvider> */}
          {/* <AppSidebar /> */}
          <main>{children}</main>
          <Analytics />
          {/* </SidebarProvider> */}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
