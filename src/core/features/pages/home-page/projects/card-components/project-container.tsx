import { type TabValues } from "../../api/interface";

import { Skeleton } from "@/components/ui/skeleton";
import { getProjects } from "../../api/queries";
import { ProjectCard } from "./project-card";

function ProjectsShimmer() {
  return (
    <>
      {Array.from({ length: 3 }, (_, i) => i).map((i) => (
        <Skeleton
          key={i}
          className="w-full max-w-[550px] h-fit min-h-[290px] md:min-h-[575px]  mx-auto flex flex-col justify-between gap-4 p-4 bg-app-shimmer-300 rounded-none"
        >
          <div className="flex flex-col gap-4 w-full h-fit">
            <Skeleton className="w-full h-[200px] bg-app-shimmer-200 rounded-none" />

            <Skeleton className="w-full h-[40px] bg-app-shimmer-200 rounded-none" />

            <Skeleton className="w-full h-[100px] md:h-[150px] bg-app-shimmer-200 rounded-none" />
          </div>

          <Skeleton className="w-[40px] h-[40px] rounded-full" />
        </Skeleton>
      ))}
    </>
  );
}

async function ProjectsContainer({ tabValue }: { tabValue: TabValues }) {
  const projects = await getProjects(tabValue);

  return (
    <>
      {projects.length ? (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <div className="mx-auto col-span-full text-center">
          Rash has not yet added any {tabValue} projects here!
        </div>
      )}
    </>
  );
}

export {
  ProjectsShimmer,
  ProjectsContainer,
};
