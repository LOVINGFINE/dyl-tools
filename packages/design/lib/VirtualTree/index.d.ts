import { FC } from "react";
import "../styles/VirtualTree.scss";
import { NodeProps } from "./TreeList";
/**
 * @interface props
 */
export interface VirtualTreeProps {
    dataSource: any[];
    prefix?: string;
    children?: FC<NodeProps>;
    expandKeys?: string[];
    nodeClick?(event: MouseEvent, record: any): void;
    nodeDbClick?(event: MouseEvent, record: any): void;
    options?: {
        height?: number;
        extra?: number;
        childrenKey?: string;
    };
}
declare const VirtualTree: FC<VirtualTreeProps>;
export default VirtualTree;
