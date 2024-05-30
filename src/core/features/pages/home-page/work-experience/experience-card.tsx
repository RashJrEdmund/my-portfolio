import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { FollowLinkSvg } from "@/components/ui/svg";
import type { Experience } from "../../api/interface";

function ExperienceShimmer() {
  return (
    <>
      {
        [1, 2, 3].map(val => (
          <Skeleton key={val} className="w-full max-w-[400px] min-h-[350px] bg-app-dark-200">
            <Skeleton />
          </Skeleton>
        ))
      }
    </>
  );
};

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div
      className="w-full max-w-[400px] min-h-[350px] flex flex-col items-start justify-start gap-2 bg-app-dark-200 p-8 py-4"
    >
      <h1 className="font-semibold text-[1.5rem] text-nowrap">
        {experience.organization}
        <Link href="/" className="w-fit ml-4">
          <FollowLinkSvg />
        </Link>
      </h1>

      <p className="font-light">
        {experience.orgDescription}
      </p>

      <ul className="mt-4 pl-4 list-disc flex flex-col items-start justify-start gap-4">
        {
          experience.achievements?.map((arch) => (
            <li key={arch}>
              {arch}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export {
  ExperienceShimmer,
  ExperienceCard,
};
