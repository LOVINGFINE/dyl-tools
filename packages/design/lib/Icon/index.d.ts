import { FC } from "react";
import "../styles/icon.scss";
export interface IconProps {
    fontSize?: number;
    color?: string;
    name?: string;
    className?: string;
    prefix?: string;
    onClick?(e: MouseEvent): void;
}
declare const Icon: FC<IconProps>;
export default Icon;
