import { type AcceptedLocales } from "@/i18n/i18n-constants";
// import { getI18n } from "@/i18n/server";
// import { getTranslations } from "next-intl/server";
import Image from "next/image";

interface Props {
  params: {
    locale: AcceptedLocales
  }
}

// export default async function About({ params: { locale } }: Props) {
//   // const t = await getI18n();

//   // // console.log({ t });

//   return (
//     <main>
//       <pre>
//         hello
//         {/* {JSON.stringify(t("banner"), null, 4)} */}
//         {/* {t["home-page"]["banner"]} */}
//       </pre>
//     </main>
//   );
// }

export default async function HomePage({ params: { locale } }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-8">
      <h1 className="mx-auto text-app-text-500">
        {/* {JSON.stringify(t("home-page", { name: "Rash" }), null, 4)} */}
      </h1>

      <Image
        src="/logo.png"
        alt="rash edmund"
        width={400}
        height={400}
      />
    </main>
  );
}
