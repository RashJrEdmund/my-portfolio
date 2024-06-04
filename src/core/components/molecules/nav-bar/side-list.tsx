"use client";

import Link from "next/link";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SIDE_LIST = [
  {
    label: "Portfolio",
    href: "/",
    subList: [
      {
        subLabel: "Home",
        subHref: "#home",
      },
      {
        subLabel: "Services",
        subHref: "#services",
      },
      {
        subLabel: "Work Experience",
        subHref: "#work-experience",
      },
      {
        subLabel: "Projects",
        subHref: "#projects",
      },
      {
        subLabel: "About",
        subHref: "#about",
      },
      {
        subLabel: "Accolades",
        subHref: "#accolades",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
    subList: [
      {
        subLabel: "Search",
        subHref: "#search",
      },
      {
        subLabel: "Articles",
        subHref: "#articles",
      },
      {
        subLabel: "Similar",
        subHref: "#similar",
      },
    ],
  },
];

export default function SideList() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center justify-center gap-4">
      {SIDE_LIST.map(({ label, href, subList }) => (
        <HoverCard key={label}>
          <HoverCardTrigger className="group relative w-fit" asChild>
            <Link
              href={href}
              className={cn(
                "inline-block font-semibold hover:text-app-blue-500 duration-300",
                pathname === href ? "text-app-blue-500" : ""
              )}
            >
              {label}
            </Link>
          </HoverCardTrigger>

          <HoverCardContent
            asChild
            className="bg-app-dark-200 text-app-text-500 w-fit mt-4 rounded-none border-0 max-w-[90vw]"
          >
            <ul className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4">
              {subList?.map(({ subLabel, subHref }) => (
                <li key={subLabel} className="w-fit">
                  <Link
                    href={href + subHref}
                    className="inline-block hover:text-app-blue-500 text-nowrap"
                  >
                    {subLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </HoverCardContent>
        </HoverCard>
      ))}
    </ul>
  );
}
