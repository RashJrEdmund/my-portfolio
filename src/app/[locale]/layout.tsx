import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getValidLocale } from "@/lib/utils";
import { ACCEPTED_LOCALES, type AcceptedLocales } from "@/i18n/i18n-constants";
// import { I18nProviderClient } from "@/i18n/client";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { NavBar } from "@/components/molecules";

const inter = Inter({ subsets: ["latin"] });

const appDescription = "Lahfen Orashus' PWA (with i18n setup) Portfolio site, built with, TypeScript, NextJs (App Router & src directory), NestJs, MongoDb, and Jest testing library. A full stack application";

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

/**
 * Since we use a dynamic route segment for the [locale] param, we need to provide all possible values
 * via generateStaticParams to Next.js, so the routes can be rendered at build time and not on demand.
*/
export function generateStaticParams() {
  return ACCEPTED_LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: AcceptedLocales };
}>) {
  const lang = getValidLocale(locale);
  const messages = await getMessages({ locale: lang });

  /**
   * provides a temporary API that can be used to distribute the locale that is received via params
   * in layouts and pages for usage in all Server Components that are rendered as part of the request.
  */
  // unstable_setRequestLocale(lang);

  // console.log({ messages });

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <NavBar locale={lang} />

          <div className="w-full pt-12">
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
