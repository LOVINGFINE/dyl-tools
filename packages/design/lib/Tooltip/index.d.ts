import { ReactElement, FC } from "react";
import "../styles/tooltip.scss";
/**
 * @interface props
 */
export interface TooltipProps {
    children?: ReactElement;
    prefix?: string;
}
declare const Tooltip: FC<TooltipProps>;
export default Tooltip;
