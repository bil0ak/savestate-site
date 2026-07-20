import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Savestate — An undo button for coding agents",
    template: "%s · Savestate",
  },
  description: site.description,
  applicationName: site.name,
  creator: "Bilal Akkil",
  keywords: [
    "coding agents",
    "checkpoint",
    "rollback",
    "developer tools",
    "Rust CLI",
    "Codex",
    "Claude Code",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: "Let the agent cook. Keep an undo button.",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Let the agent cook. Keep an undo button.",
    description: site.description,
  },
  icons: {
    icon: "/brand-mark.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-svh antialiased">{children}</body>
    </html>
  );
}
