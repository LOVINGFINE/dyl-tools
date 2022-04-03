import React, { FC, MouseEvent } from "react";
import "../styles/button.scss";
declare const Button: FC<ButtonProps>;
export interface ButtonProps {
    children?: React.ReactElement | React.ReactElement[] | string;
    type?: "default" | "error" | "primary";
    size?: "middle" | "small" | "large";
    style?: React.CSSProperties;
    onClick?(e: MouseEvent): void;
    disabled?: boolean;
    prefix?: string;
    loading?: boolean;
    icon?: string;
}
export default Button;
