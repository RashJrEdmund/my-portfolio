import { ACCEPTED_LOCALES } from "@/i18n/i18n-constants";
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

/**
 * see the docs to get started with next-international
 * https://next-international.vercel.app/docs
*/
const I18nMiddleware = createI18nMiddleware({
  locales: ACCEPTED_LOCALES,
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  console.log({ request });
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|icon.png|robots.txt).*)"],
};
