"use client";

import Link from "next/link";
import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectsShimmer, ProjectsContainer } from "./card-components/project-container";

import { cn } from "@/lib/utils";
import { type TabValues, ArrTabValues } from "../api/interface";

interface TabProjectData {
  tabs: {
    text: string;
    tabValue: TabValues,
  }[],
  tabContent: {
    tabValue: TabValues;
  }[];
}

const TabListData: TabProjectData["tabs"] = [
  {
    text: "Favorites",
    tabValue: "favorites",
  },
  {
    text: "Full Stack",
    tabValue: "fullstack",
  },
  {
    text: "Frontend",
    tabValue: "frontend",
  },
  {
    text: "Backend",
    tabValue: "backend",
  },
  {
    text: "HTML & CSS",
    tabValue: "html&css",
  },
  {
    text: "All",
    tabValue: "all",
  }
];

const TabContentData: TabProjectData["tabContent"] = [
  {
    tabValue: "favorites",
  },
  {
    tabValue: "fullstack",
  },
  {
    tabValue: "frontend",
  },
  {
    tabValue: "backend",
  },
  {
    tabValue: "html&css",
  },
  {
    tabValue: "all",
  }
];

function ProjectTabs() {
  const searchParams = useSearchParams();

  // const { isLoading, data: event } = useGetOneEvent(params.event_id);

  const defaultTab = useMemo(() => {
    // this is just for the persistence of each tab on refresh or page load. using search params to get current tab
    const tab = searchParams.get("tab") || "favorites";

    return ArrTabValues.includes(tab as TabValues) ? tab : "info"; // defaulting to info, the first tab.
  }, [searchParams]);

  return (
    <Tabs
      defaultValue={defaultTab}
      className="w-full flex flex-col items-center justify-start gap-8"
    >
      <TabsList className="flex flex-wrap w-fit h-fit items-center justify-center md:justify-start gap-4 bg-app-dark-500 p-2 text-app-text-200">
        {TabListData.map(({ text, tabValue }) => (
          // <Link
          //   key={tabValue}
          //   href={`?tab=${tabValue}#projects`}
          //   className="w-fit h-fit inline-block"
          // >
          <TabsTrigger
            value={tabValue}
            key={tabValue}
            className={cn("px-3 py-2 md:px-8 md:py-4 inline-block bg-app-dark-200")}
          >
            {text}
          </TabsTrigger>
          // </Link> }
        ))}
      </TabsList>

      <div className="w-full min-h-[min(50vh,_600px)]">
        {
          TabContentData.map(({ tabValue }) => (
            <TabsContent
              value={tabValue}
              key={tabValue}
              className="w-full flex flex-col items-center justify-center md:grid md:grid-auto-fill-400 gap-4 gap-y-6 md:gap-y-14"
            >
              <Suspense fallback={<ProjectsShimmer />}>
                <ProjectsContainer tabValue={tabValue} />
              </Suspense>
            </TabsContent>
          ))
        }
      </div>
    </Tabs>
  );
};

export {
  ProjectTabs
};
