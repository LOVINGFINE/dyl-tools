/*
 * Created by zhangq on 2022/03/11
 * tooltip
 */
import React, { ReactElement, FC } from "react";
import "../styles/tooltip.scss";

/**
 * @interface props
 */
export interface TooltipProps {
  children?: ReactElement;
  prefix?: string;
}
const Tooltip: FC<TooltipProps> = ({
  children,
  prefix = "dyl",
}: TooltipProps): ReactElement => {
  /** render */
  return <div className={`${prefix}-tooltip`}>{children}</div>;
};

export default Tooltip;
