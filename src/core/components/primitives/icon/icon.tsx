import { icons, type IconType } from "./icons";
import { IconProperties } from "./types";

interface CustomProperties {
  icon: IconType;
  style?: React.CSSProperties;
}

type Properties = IconProperties & CustomProperties;

export function Icon({ icon, size = 20, ...properties }: Properties) {
  const Component = icons[icon];
  return <Component size={size} {...properties} />;
}
