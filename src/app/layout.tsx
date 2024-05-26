import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const appDescription =  "Lahfen Orashus' Portfolio site, built with, TypeScript, NextJs (App Router & src directory), NestJs, MongoDb, and Jest testing library. A full stack application";

export const metadata: Metadata = {
  title: {
    template: "%s | Rash EJ",
    default: "Orashus' Portfolio site",
  },
  description: appDescription,
  keywords: ["rash", "orashus", "portfolio", "portofolio site", "rash portfolio", "orashus portfolio", "SEO", "rash pwa", "orashus pwa"],
  manifest: "/manifest.json",
  authors: [
    {
      url: "https://twitter.com/orashus",
      name: "Rash Edmund"
    },
    {
      url: "https://github.com/rashjredmund",
      name: "Rash Edmund"
    }
  ],
  openGraph: {
    type: "website",
    description: appDescription,
    siteName: "Orashus' (a.k.a Rash Edmund)'s Portfolio site",
    title: {
      template: "%s | Rash's Portfolio site",
      default: "Orashus' Portfolio site",
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Orashus' Portfolio site",
    // startupImage: []
  },
  twitter: {
    card: "summary",
    creator: "orashus",
    description: appDescription,
    title: {
      template: "%s | Rash's Portfolio site",
      default: "Orashus' Portfolio site",
    },
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
};
