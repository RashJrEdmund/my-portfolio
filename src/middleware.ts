import createMiddleware from "next-intl/middleware";
import { ACCEPTED_LOCALES } from "./i18n/i18n-constants";

export default createMiddleware({
  locales: ACCEPTED_LOCALES,

  defaultLocale: "en",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(fr|en)/:path*"]
};
