import { ComponentType } from "react";

import { IconProperties } from "@/components/primitives/icon/types";

export function fromIcon(Component: ComponentType<{ color?: string }>) {
  return function Icon(properties: IconProperties) {
    return <Component {...properties} color="currentColor" />;
  };
}
