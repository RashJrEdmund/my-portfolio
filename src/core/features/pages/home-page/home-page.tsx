import { type AcceptedLocales } from "@/i18n/i18n-constants";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface Props {
  params: {
    locale: AcceptedLocales
  }
}

export default async function HomePage({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: "home-page.banner" } as unknown as undefined);

  const text = t("welcome", { name: "Rash" });

  // console.log({ t: text });

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
      <h1 className="mx-auto text-app-text-500">
        {text}
      </h1>

      <Image
        src="/rash-1.jpeg"
        alt="rash edmund"
        width={400}
        height={400}
        className="object-bottom object-cover rounded-[100px_100px_0_0] pb-12 h-[500px] min-w-[310px]"
      />
    </main>
  );
}
