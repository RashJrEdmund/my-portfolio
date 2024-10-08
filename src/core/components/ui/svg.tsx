import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"svg"> {
  //
}

function SmallLineSvg({ className, ...restProps }: Props) {
  return (
    <svg
      {...restProps}
      className={cn("inline", className || "")}
      width="50"
      height="2"
      viewBox="0 0 50 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="1.05079"
        x2="50"
        y2="1.05079"
        stroke="#0F5EF5"
        stroke-width="1.89842"
      />
    </svg>
  );
}

function FollowLinkSvg({ className, ...restProps }: Props) {
  return (
    <svg
      {...restProps}
      className={cn("inline w-[20px] h-[20px]", className || "")}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.24985 3.75H19.4998C19.6988 3.75 19.8895 3.82902 20.0302 3.96967C20.1708 4.11032 20.2498 4.30109 20.2498 4.5V15.75C20.2498 15.9489 20.1708 16.1397 20.0302 16.2803C19.8895 16.421 19.6988 16.5 19.4998 16.5C19.3009 16.5 19.1102 16.421 18.9695 16.2803C18.8289 16.1397 18.7498 15.9489 18.7498 15.75V6.31L5.02985 20.03C4.88767 20.1625 4.69963 20.2346 4.50532 20.2312C4.31102 20.2277 4.12564 20.149 3.98822 20.0116C3.85081 19.8742 3.7721 19.6888 3.76867 19.4945C3.76524 19.3002 3.83737 19.1122 3.96985 18.97L17.6898 5.25H8.24985C8.05093 5.25 7.86017 5.17098 7.71952 5.03033C7.57886 4.88968 7.49985 4.69891 7.49985 4.5C7.49985 4.30109 7.57886 4.11032 7.71952 3.96967C7.86017 3.82902 8.05093 3.75 8.24985 3.75Z"
        fill="#0F5EF5"
      />
    </svg>
  );
}

const ServiceSVGObj = {
  serviceSvg1: "/icons/service-svg-1.svg",
  serviceSvg2: "/icons/service-svg-2.svg",
  serviceSvg3: "/icons/service-svg-3.svg",
};

export {
  SmallLineSvg,
  FollowLinkSvg,

  // OBJECTS, should be used with images
  ServiceSVGObj,
};
