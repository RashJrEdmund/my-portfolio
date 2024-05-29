import { Skeleton } from "@/components/ui/skeleton";
import { getSkills } from "../../api/skill.queries";
import type { Skill } from "../../api/interface";

function SillShimmer() {
  return (
    <>
      {Array.from({ length: 4 }, (_, i) => i).map((i) => (
        <Skeleton key={i} className="w-[95%] h-[200px] mx-auto flex flex-col gap-4 p-4 bg-app-dark-200 rounded-none">
          <Skeleton className="w-full h-[30px] bg-app-shimmer-300 rounded-none" />

          <Skeleton className="w-full h-[150px] bg-app-shimmer-300 rounded-none" />
        </Skeleton>
      ))}
    </>
  );
}

function SkillComponent({ skill: { id, label, description } }: { skill: Skill }) {
  return (
    <div className="w-[95%] h-[200px] mx-auto bg-app-dark-200 border-b-[5px] border-b-app-blue-500 flex flex-col gap-4 p-4 rounded-none">
      <h4 className="font-semibold text-[1.2rem]">
        {label}
      </h4>

      <p className="font-normal leading-6">
        {description}
      </p>
    </div>
  );
}

async function Skills() {
  const skillData = await getSkills();

  return (
    <>
      {
        skillData.length ? (
          skillData.map((skill) => (
            <SkillComponent key={skill.id} skill={skill} />
          ))
        ) : (
          <div>
            Rash Has Not Added Any Skill Yet!
          </div>
        )
      }
    </>
  );
}

export {
  SillShimmer,
  Skills
};
