/*
 * Created by zhangq on 2022/02/01
 * input 输入框
 */
import React, { FC, CSSProperties } from "react";
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
const Input: FC<InputProps> = ({
  value = "",
  size = "default",
  change,
  onBlur,
  perfix = "dyl",
  placeholder = "请输入",
  width,
  style = {},
  onEnter,
}: InputProps): React.ReactElement => {
  const getStyle = () => {
    const obj = {
      ...style,
    };
    if (width) {
      obj["width"] = width;
    }
    return obj;
  };
  const onKeyDown = (e: KeyboardEvent) => {
    const key = e.key;
    if (key === "Enter" && onEnter) {
      onEnter(e);
    }
  };
  /** render */
  return (
    <input
      type={"text"}
      className={`${perfix}-input ${perfix}-input-${size}`}
      placeholder={placeholder}
      style={getStyle()}
      value={value}
      onBlur={onBlur}
      onKeyDown={(e: any) => onKeyDown(e)}
      onChange={(e) => {
        const input = e.target.value || "";
        if (change) {
          change(input);
        }
      }}
    />
  );
};

export default Input;
