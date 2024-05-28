import { type AcceptedLocales } from "@/i18n/i18n-constants";
import { unstable_setRequestLocale } from "next-intl/server";
interface Props {
  params: {
    locale: AcceptedLocales
  }
}

export default function BlogPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return(
    <main className="mx-auto w-full max-w-app-dynamic-max-w">
      <h1>Welcome to my blog</h1>
    </main>
  );
}
