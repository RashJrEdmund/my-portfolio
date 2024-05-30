import { HeaderLogo } from "@/components/ui/text-logo";
import { getSocials } from "./api/socials.queries";
import type { SocialHandle } from "./api/types";
import { FollowLinkSvg, SmallLineSvg } from "@/components/ui/svg";
import Link from "next/link";

function HandleCard({ handle: { id, name, username, href } }: { handle: SocialHandle }) {
  return (
    <li className="flex flex-col">
      <p className="font-semibold text-[1rem]">{name}</p>
      <p className="font-light">
        @{username}

        <Link href={href} target="_blank" className="ml-2 sm:ml-4 w-fit" title={"go to " + name + " - " + username}>
          <FollowLinkSvg className="size-6" />
        </Link>
      </p>
    </li>
  );
}

export default async function Footer() {
  const SocialHandles = await getSocials();

  return (
    <footer id="contact" className="w-full h-fit min-h-[20vh] self-end flex flex-col items-center justify-center gap-8 bg-app-dark-600">
      <div className="w-full max-w-app-dynamic-max-w mx-auto flex items-start justify-between gap-8 py-8">
        <HeaderLogo hTagLevel="h2" />

        <div className="w-fit sm:w-full flex items-center justify-center">
          <div>
            <h3 className="font-bold sm:text-[1.2rem] mb-4">
              <SmallLineSvg className="mr-4" />
              Link tree
            </h3>

            <ul className="flex flex-col gap-y-2 sm:gap-y-4">
              {
                SocialHandles.length ? (
                  SocialHandles.map((handle) => (
                    <HandleCard key={handle.id} handle={handle} />
                  ))
                ) : (
                  <li>
                    Rash hasn&apos;t added any handles yet
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
