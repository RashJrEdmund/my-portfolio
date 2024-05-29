import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, NavBar } from "@/components/molecules";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

const appDescription = "Lahfen Orashus' PWA Portfolio site, built with, TypeScript, NextJs (App Router & src directory), NestJs, MongoDb, and Jest testing library. A full stack application";

export const metadata: Metadata = {
  title: {
    template: "%s | Rash EJ",
    default: "Orashus' Portfolio site",
  },
  description: appDescription,
  keywords: ["rash", "orashus", "portfolio", "portfolio site", "rash portfolio", "orashus portfolio", "SEO", "rash pwa", "orashus pwa"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Toaster richColors position="top-right" />

      <body className={inter.className}>
        <NavBar />

        <div className="w-full min-h-[90vh] pt-12">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
};
