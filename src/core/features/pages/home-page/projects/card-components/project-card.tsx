"use client";

import type { Project } from "../../api/interface";
import Image from "next/image";
import Link from "next/link";
import { FollowLinkSvg } from "@/components/ui/svg";
import { Icon } from "@/components/primitives/icon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";

function ImageCarousel({ images }: { images: string[] }) {
  const [canScroll, setCanScroll] = useState({
    prev: true,
    next: true,
  });

  return (
    <Carousel
      orientation="horizontal"
      className="p-0"
      onCarouselScroll={({ canScrollPrev, canScrollNext }) =>
        setCanScroll({
          prev: canScrollPrev,
          next: canScrollNext,
        })
      }
    >
      <CarouselContent>
        {images?.map((src) => (
          <CarouselItem key={src} className="h-fit">
            <Image
              src={src}
              alt="service icon"
              width={540}
              height={100}
              className="w-full"
              draggable={false}
              data-test-src={src}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {canScroll.prev && (
        <CarouselPrevious className="text-app-dark-500 translate-x-[-90%] transition md:opacity-0 md:duration-300 md:translate-x-[0] md:group-hover:translate-x-[-90%] md:group-hover:opacity-100" />
      )}
      {canScroll.next && (
        <CarouselNext className="text-app-dark-500 translate-x-[90%] transition md:opacity-0 md:duration-300 md:translate-x-[0] md:group-hover:translate-x-[90%] md:group-hover:opacity-100" />
      )}
    </Carousel>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [showTechStack, setShowTechStack] = useState<boolean>(true);

  const toggleTechStack = () => {
    setShowTechStack((prev) => !prev);
  };

  return (
    <div className="group relative w-full max-w-[550px] h-fit md:min-h-[575px] mx-auto bg-app-dark-500 border-b-[5px] border-b-app-blue-500 flex flex-col justify-between gap-4 p-4 md:duration-300 md:hover:translate-y-[-10px]">
      <div className="flex flex-col gap-4 w-full h-fit">
        {showTechStack ? (
          <div
            className={cn(
              !project.images.length ? "" : "absolute",
              "z-[5] top-0 left-0 m-4 mt-5 flex flex-wrap items-start justify-start max-w-[300px] gap-2 select-none"
            )}
          >
            {project.tags?.map(({ id, label, bgColor, textColor }) => (
              <span
                key={label + id}
                className="rounded-xl text-nowrap px-3 py-1"
                style={{ color: textColor, backgroundColor: bgColor }}
              >
                {label}
              </span>
            ))}
          </div>
        ) : null}

        {project.images.length > 0 ? (
          <ImageCarousel images={project.images} />
        ) : null}

        <div className="w-full flex items-center justify-between gap-4 flex-nowrap">
          <div className="w-full flex items-center justify-start gap-4">
            <Image
              src={project.logo}
              width={50}
              height={50}
              alt="project logo"
              className="w-[50px] h-[50px] rounded-full bg-cover bg-no-repeat bg-center"
            />
            <div className="w-full flex items-center justify-start flex-wrap gap-3">
              <h4 className="font-semibold md:text-[1.2rem]">{project.name}</h4>

              <Link
                href={project.url}
                target="_blank"
                className="text-app-blue-500 md:text-app-text-200 md:hover:text-app-blue-500"
              >
                <FollowLinkSvg />
              </Link>
            </div>
          </div>

          <Tooltip
            className="font-light flex flex-nowrap items-center justify-center gap-1 cursor-pointer"
            onClick={toggleTechStack}
            title={`${showTechStack ? "hide" : "show"} tech stack`}
          >
            {showTechStack ? "hide" : "show"}
            <Icon icon="tool" size={15} />
          </Tooltip>
        </div>

        <p className="font-normal text-sm sm:text-base leading-6 min-h-[100px]">
          {project.description}
        </p>
      </div>

      <div className="w-full flex items-center justify-between">
        {project.isPrivateRepo ? (
          <span />
        ) : (
          <Link
            href={project.gitHubRepo}
            target="_blank"
            className="w-fit flex items-center justify-center text-app-blue-500"
            title="visit public repo"
          >
            <Image
              src="/icons/github-icon.svg"
              width={40}
              height={40}
              alt="git hub repo"
              className="rounded-full"
            />{" "}
            repo
          </Link>
        )}

        {project.dateCreated ? (
          <Tooltip
            className="text-sm flex items-center justify-center gap-1 select-none"
            title="date started"
          >
            <Calendar size={17} />
            {new Date(project.dateCreated).toDateString()}
          </Tooltip>
        ) : null}

        {project.tabValues
          .filter((v) => v !== "favorites")
          .map((v) => (
            <span
              key={v}
              className="text-sm bg-app-dark-200 py-1 px-3 rounded-md select-none"
            >
              {v}
            </span>
          ))}
      </div>
    </div>
  );
}

export { ProjectCard };
