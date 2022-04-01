import { ReactElement, FC } from "react";
import "../styles/VirtualScroll.scss";
/**
 * @interface props
 */
export interface VirtualScrollProps {
    prefix?: string;
    children?: ReactElement[] | ReactElement;
    expandKeys?: string[];
    options?: {
        extra?: number;
    };
}
declare const VirtualScroll: FC<VirtualScrollProps>;
export default VirtualScroll;
