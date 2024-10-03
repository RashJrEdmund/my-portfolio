import { HeaderLogo } from "@/components/ui/text-logo";
import { getSocials } from "./api/socials.queries";
import type { SocialHandle } from "./api/types";
import { SmallLineSvg } from "@/components/ui/svg";
import Link from "next/link";
import { CopyButton } from "./copy-button";
import { Tooltip } from "@/components/ui/tooltip";
import { MapPin } from "lucide-react";

function SocialHandleCard({
  handle: { id, name, username, href },
}: {
  handle: SocialHandle;
}) {
  return (
    <li className="flex flex-col" key={id}>
      <p className="font-semibold text-[1rem]">{name}</p>
      <Link
        href={href}
        target="_blank"
        className="font-light text-nowrap text-app-blue-500 md:text-app-text-200 md:font-normal md:hover:text-app-blue-500 text-app"
      >
        <Tooltip
          title={"Visit " + name.toLowerCase() + " - " + username.toLowerCase()}
        >
          @{username}
        </Tooltip>
      </Link>
    </li>
  );
}

export default async function Footer() {
  const SocialHandles = await getSocials();

  return (
    <footer
      id="contact"
      className="w-full h-fit min-h-[20vh] self-end flex flex-col items-center justify-center gap-8 bg-app-dark-700"
    >
      <div className="w-full max-w-app-dynamic-max-w mx-auto flex flex-col md:flex-row items-start justify-between gap-8 py-8">
        <HeaderLogo hTagLevel="h2" imgSx="inline" />

        <div className="w-fit sm:w-full flex items-start justify-center gap-[5px] ssm:gap-4 sm:gap-8 md:gap-16">
          <div className="w-fit">
            <h3 className="font-bold sm:text-[1.2rem] mb-4 text-nowrap">
              <SmallLineSvg className="mr-4" />
              Link Tree
            </h3>

            <ul className="flex flex-col gap-y-2 sm:gap-y-4">
              {SocialHandles.length ? (
                SocialHandles.map((handle) => (
                  <SocialHandleCard key={handle.id} handle={handle} />
                ))
              ) : (
                <li>Rash hasn&apos;t added any handles yet</li>
              )}
            </ul>
          </div>

          <div className="w-fit">
            <h3 className="font-bold sm:text-[1.2rem] mb-4 text-nowrap">
              <SmallLineSvg className="mr-4" />
              Others
            </h3>

            <ul className="flex flex-col gap-y-2 sm:gap-y-4">
              {[
                {
                  name: "Email",
                  val: "orashusedmund@gmail.com",
                },
                {
                  name: "Phone Number",
                  val: "+237 670 118 208",
                },
              ].map(({ name, val }) => (
                <li className="flex flex-col" key={name}>
                  <p className="font-semibold text-[1rem] text-nowrap">
                    {name}
                  </p>
                  <p className="font-light break-all">
                    {val} <CopyButton value={val} label={name} />
                  </p>
                </li>
              ))}
            </ul>

            <hr className="border-app-blue-500 my-4" />

            <span className="flex items-center justify-start gap-1 font-light">
              <MapPin size={20} />
              {/* Earth! 🙂 */}
              Yaoundé, Centre, Cameroon
            </span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-app-dynamic-max-w">
        <hr className="border-app-blue-500" />

        <div className="py-6">
          Made with 💙 by <span>Orashus ( Rash )</span>
        </div>
      </div>
    </footer>
  );
}
