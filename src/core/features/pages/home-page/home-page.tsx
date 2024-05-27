import { type AcceptedLocales } from "@/config/i18n-locales";
import { useTranslations } from "next-intl";
import { getMessages } from "next-intl/server";
// import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface Props {
  params: {
    locale: AcceptedLocales
  }
}

export default async function About() {
  const t1 = useTranslations("home-page");
  const t = (await getMessages()) as { [k: string]: any };

  console.log({ t });

  return (
    <main>
      <pre>
        {/* {JSON.stringify(t("banner"), null, 4)} */}
        {t["home-page"]["banner"]}
      </pre>
    </main>
  );
}

// export default async function HomePage({ params: { locale } }: Props) {
//   // const t = await getTranslations({ locale, namespace: "Metadata" });
//   const t2 = useTranslations("home-page");

//   const values = t2("banner");
//   console.log({ values, t2 });

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
//       <h1 className="mx-auto text-app-text-500">
//         {/* {JSON.stringify(t("home-page", { name: "Rash" }), null, 4)} */}
//       </h1>

//       <Image
//         src="/logo.png"
//         alt="rash edmund"
//         width={400}
//         height={400}
//       />

//       {/* <Image
//         src="/rash-1.jpeg"
//         alt="rash edmund"
//         width={400}
//         height={400}
//       /> */}
//     </main>
//   );
// }
