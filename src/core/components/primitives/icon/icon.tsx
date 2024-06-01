import type { MouseEventHandler } from "react";
import { icons, type IconType } from "./icons";
import { IconProperties } from "./types";

interface CustomProperties {
  icon: IconType;
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<SVGAElement> | undefined;
}

type Properties = IconProperties & CustomProperties;

export function Icon({ icon, size = 20, onClick, ...properties }: Properties) {
  const Component = icons[icon];

  return <Component size={size} {...properties} onClick={onClick} />;
}
