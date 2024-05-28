"use client";

import Link from "next/link";
import { type AcceptedLocales } from "@/i18n/i18n-constants";
import { useTranslations } from "next-intl";
import { useCallback, useMemo } from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from "@/components/ui/hover-card";

const PARENT_SECTIONS = ["portfolio", "blog"] as const;
const SECTIONS = ["home", "services", "projects", "about", "search", "articles", "similar"] as const;

export default function SideList({ locale }: { locale: AcceptedLocales }) {
  const t = useTranslations("nav-bar.side-list" as unknown as undefined);

  const translate = useCallback((parentSection: typeof PARENT_SECTIONS[number], section?: typeof SECTIONS[number]) => {
    const _section = section ? `${parentSection}.${section}` : parentSection;
    return t.raw(_section as never);
  }, [t]);

  // console.log({ t: translate("blog") });

  const SIDE_LIST = useMemo(() => {
    return [
      {
        label: "Portfolio",
        href: "/",
        subList: [
          {
            subLabel: translate("portfolio", "home"),
            subHref: "#home",
          },
          {
            subLabel: translate("portfolio", "services"),
            subHref: "#services",
          },
          {
            subLabel: translate("portfolio", "projects"),
            subHref: "#projects",
          },
          {
            subLabel: translate("portfolio", "about"),
            subHref: "#about",
          }
        ]
      },
      {
        label: "Blog",
        href: `${locale}/blog`,
        subList: [
          {
            subLabel: translate("blog", "search"),
            subHref: "#search",
          },
          {
            subLabel: translate("blog", "articles"),
            subHref: "#articles",
          },
          {
            subLabel: translate("blog", "similar"),
            subHref: "#similar",
          },
        ]
      }
    ] as const;
  }, [locale, translate]);

  return (
    <ul className="flex items-center justify-center gap-4">
      {
        SIDE_LIST.map(({ label, href, subList }) => (
          <HoverCard key={label}>
            <HoverCardTrigger className="group relative w-fit">
              <Link
                href={href}
                className="inline-block font-semibold hover:text-app-blue-500 duration-300"
              >
                {label}
              </Link>
            </HoverCardTrigger>

            <HoverCardContent asChild className="bg-app-dark-200 text-app-text-500 w-fit">
              <ul className="flex items-center justify-center gap-4">
                {
                  subList?.map(({ subLabel, subHref }) => (
                    <li key={subLabel} className="w-fit">
                      <Link
                        href={subHref}
                        className="inline-block hover:text-app-blue-500 text-nowrap"
                      >
                        {subLabel}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </HoverCardContent>
          </HoverCard>
        ))
      }
    </ul>
  );
}
