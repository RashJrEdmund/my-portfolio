import type { Experience } from "../api/interface";

import { Skeleton } from "@/components/ui/skeleton";
import { FollowLinkSvg } from "@/components/ui/svg";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";

function ExperienceShimmer() {
  return (
    <>
      {[1, 2, 3].map((val) => (
        <Skeleton
          key={val}
          className="w-full sm:max-w-[400px] xl:max-w-[550px] min-h-[380px] flex flex-col items-start justify-start gap-2 bg-app-dark-200 p-8 py-4"
        >
          <Skeleton className="w-full flex items-center justify-start gap-4 bg-transparent">
            <Skeleton className="w-[60px] h-[60px] rounded-full bg-app-shimmer-300" />

            <Skeleton className="w-[90%] h-[50px] bg-app-shimmer-300" />
          </Skeleton>

          <Skeleton className="w-full h-[250px] bg-app-shimmer-300" />
        </Skeleton>
      ))}
    </>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <CardContainer
      className="inter-var w-full h-fit p-0"
      containerClassName="w-full h-fit sm:max-w-[400px] xl:max-w-[550px] p-0"
    >
      <CardBody className="w-full h-fit min-h-[340px] sm:min-h-[420px] xl:min-h-[340px] flex flex-col items-start justify-start gap-2 bg-app-dark-200 p-8 py-4">
        <CardItem
          translateZ={50}
          className="w-full flex items-center justify-start gap-4"
        >
          <Image
            src={experience.orgLogo}
            alt={experience.organization + " logo"}
            width={50}
            height={50}
            className="rounded-full w-[50px] h-[50px] bg-cover bg-center bg-no-repeat"
          />

          <div className="flex flex-col gap-[8px]">
            <h2 className="font-semibold text-[1.2rem] md:text-[1.5rem] text-nowrap">
              {experience.organization}

              <Link href="/" target="_blank" className="w-fit ml-4">
                <FollowLinkSvg />
              </Link>
            </h2>

            <p className="font-light" data-testid="role">
              {experience.role}
            </p>
          </div>
        </CardItem>

        <CardItem as="p" translateZ={55} className="font-light">
          {experience.orgDescription}
        </CardItem>

        <CardItem
          as="ul"
          translateZ={50}
          className="mt-4 pl-4 list-disc flex flex-col items-start justify-start gap-4"
        >
          {experience.achievements?.map((arch) => <li key={arch}>{arch}</li>)}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export { ExperienceShimmer, ExperienceCard };
