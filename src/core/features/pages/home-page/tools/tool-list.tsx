import { Skeleton } from "@/components/ui/skeleton";
import { getToolAndLanguages } from "../api/queries";
import type { Tool } from "../api/interface";
import Image from "next/image";
import { ServiceSVGObj } from "@/components/ui/svg";

function ToolsShimmer() {
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

function ToolComponent({
  tool: { id, img_url, name },
  i,
}: {
  tool: Tool;
  i: number;
}) {
  const adder = i % 2 === 0 ? 1 : 2;

  const src =
    ServiceSVGObj[
      ("serviceSvg" + adder) as unknown as keyof typeof ServiceSVGObj
    ];

  return (
    <div className="w-full mx-auto h-fit min-h-[160px] bg-app-dark-200 border-b-[5px] border-b-app-blue-500 flex flex-col gap-4 p-4 rounded-none">
      <Image
        src={img_url}
        alt="service icon"
        width={100}
        height={100}
        className="size-[90px]"
        draggable={false}
        data-test-src={src}
      />

      <h4 className="font-semibold text-[1.2rem]">{name}</h4>
    </div>
  );
};

async function ToolList() {
  const tools = await getToolAndLanguages();

  return (
    <>
      {tools.length ? (
        tools.map((tool, i) => (
          <ToolComponent key={tool.id} tool={tool} i={i} />
        ))
      ) : (
        <div>Rash Has Not Added Any Tools Yet!</div>
      )}
    </>
  );
}

export {
  ToolsShimmer,
  ToolComponent, // exporting to be tested
  ToolList,
};
