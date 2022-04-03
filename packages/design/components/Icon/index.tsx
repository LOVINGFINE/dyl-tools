import React, { FC } from "react";
import unicodes from "./font-unicode.json";
import "../styles/icon.scss";
const types = unicodes as any;

export interface IconProps {
  fontSize?: number;
  color?: string;
  name?: string;
  className?: string;
  prefix?: string;
  onClick?(e: MouseEvent): void;
}
const Icon: FC<IconProps> = ({
  fontSize,
  color,
  name,
  className,
  onClick,
  prefix = "dyl",
}: IconProps): React.ReactElement => {
  const getStyle = () => {
    const temp: any = {};
    if (fontSize) {
      temp[""] = fontSize;
    }
    if (color) {
      temp["color"] = color;
    }
    return temp;
  };
  const getClassName = () => {
    if (className) {
      return `${prefix}-icon-font ${className}`;
    }
    return `${prefix}-icon-font`;
  };
  return name && types[name] ? (
    <i
      className={getClassName()}
      onClick={(e: any) => {
        if (onClick) {
          onClick(e);
        }
      }}
      style={getStyle()}
    >
      {types[name]}
    </i>
  ) : (
    <></>
  );
};

export default Icon;
