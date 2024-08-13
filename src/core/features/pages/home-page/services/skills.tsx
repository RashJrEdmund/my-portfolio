import { Skeleton } from "@/components/ui/skeleton";
import { getSkills } from "../api/queries";
import type { Skill } from "../api/interface";
import Image from "next/image";
import { ServiceSVGObj } from "@/components/ui/svg";

function SkillShimmer() {
  return (
    <>
      {Array.from({ length: 4 }, (_, i) => i).map((i) => (
        <Skeleton
          key={i}
          className="w-[95%] xl:max-w-[350px] h-[260px] mx-auto flex flex-col gap-4 p-4 bg-app-dark-200 rounded-none"
        >
          <Skeleton className="w-[50px] h-[50px] bg-app-shimmer-300 rounded-none" />

          <Skeleton className="w-full h-[30px] bg-app-shimmer-300 rounded-none" />

          <Skeleton className="w-full h-[150px] bg-app-shimmer-300 rounded-none" />
        </Skeleton>
      ))}
    </>
  );
}

function SkillComponent({
  skill: { id, label, description },
  i,
}: {
  skill: Skill;
  i: number;
}) {
  const adder = i % 2 === 0 ? 1 : 2;

  const src =
    ServiceSVGObj[
      ("serviceSvg" + adder) as unknown as keyof typeof ServiceSVGObj
    ];

  return (
    <div className="w-full sm:w-[95%] max-w-[320px] h-fit min-h-[260px] mx-auto bg-app-dark-200 border-b-[5px] border-b-app-blue-500 flex flex-col gap-4 p-4 rounded-none">
      <Image
        src={src}
        alt="service icon"
        width={50}
        height={50}
        className="size-[50px]"
        draggable={false}
        data-test-src={src}
      />

      <h4 className="font-semibold text-[1.2rem]">{label}</h4>

      <p className="font-normal leading-6">{description}</p>
    </div>
  );
}

async function Skills() {
  const skillData = await getSkills();

  return (
    <>
      {skillData.length ? (
        skillData.map((skill, i) => (
          <SkillComponent key={skill.id} skill={skill} i={i} />
        ))
      ) : (
        <div>Rash Has Not Added Any Skill Yet!</div>
      )}
    </>
  );
}

export {
  SkillShimmer,
  SkillComponent, // exporting to be tested
  Skills,
};
