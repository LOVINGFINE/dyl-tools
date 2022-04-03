/*
 * Created by zhangq on 2021/11/26
 *
 */
import React, { ReactElement, FC, MouseEvent } from "react";
import "../styles/button.scss";
import Icon from "../Icon";
const Button: FC<ButtonProps> = ({
  children,
  type,
  size,
  onClick,
  style,
  disabled,
  loading = false,
  icon,
  prefix = "dyl",
}: ButtonProps): ReactElement => {
  const classNames = [
    "button",
    `button-${type || "default"}`,
    `button-${size || "middle"}`,
    `button-loading-${loading}`,
    `${!!disabled ? "button-disabled" : ""}`,
  ]
    .filter((ele) => !!ele)
    .map((ele) => {
      return `${prefix}-${ele}`;
    });
  const getChildren = () => {
    if (typeof children === "string" && children.length === 2) {
      return children.split("").join("  ");
    }
    return children;
  };
  /** render */
  return (
    <div
      onClick={(e) => {
        if (onClick && !loading) {
          onClick(e);
        }
      }}
      className={classNames.join(" ")}
      style={style}
    >
      {loading || !!icon ? (
        <div className={`${prefix}-button-${size || "middle"}-icon`}>
          {loading ? (
            <Icon name="spinner8" className={`${prefix}-button-icon-loading`} />
          ) : (
            <Icon name={icon} />
          )}
        </div>
      ) : (
        <></>
      )}
      {getChildren()}
    </div>
  );
};
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
