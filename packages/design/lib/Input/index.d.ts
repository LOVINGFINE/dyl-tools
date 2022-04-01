import { FC, CSSProperties } from "react";
import "../styles/input.scss";
/**
 * @interface props
 */
export interface InputProps {
    value?: string | number;
    change?(e: any): void;
    onEnter?(e: KeyboardEvent): void;
    onBlur?(): void;
    size?: "default" | "small" | "large";
    perfix?: string;
    placeholder?: string;
    width?: number;
    style?: CSSProperties;
}
declare const Input: FC<InputProps>;
export default Input;
