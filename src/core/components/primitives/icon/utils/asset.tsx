import dynamic from "next/dynamic";
import Image from "next/image";

import { IconProperties } from "@/components/primitives/icon/types";
import { cn } from "@/lib/utils";

export function fromAsset(asset: () => Promise<{ default: string }>) {
  return dynamic(async () => {
    const { default: assetSource } = await asset();
    return function Icon({ size, fill, ...properties }: IconProperties) {
      return (
        <Image
          {...properties}
          alt="icon"
          height={Number(size)}
          src={assetSource}
          width={Number(size)}
          className={cn({ "object-fill": fill })}
        />
      );
    };
  });
}
