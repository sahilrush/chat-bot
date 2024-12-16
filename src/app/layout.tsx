import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chat-Bot",
  description: "Ask anything you want to know",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(geistSans.className, "min-h-screen antialiased")}
        >
          <main className="h-screen dark text-foreground bg-background">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
