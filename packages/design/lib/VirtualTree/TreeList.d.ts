import { FC } from "react";
import "../styles/VirtualTree.scss";
/**
 * @interface props
 */
export interface NodeProps {
    record: any;
}
export interface TreeListProps {
    dataSource: any[];
    config: {
        start: number;
        end: number;
        height: number;
    };
    children?: FC<NodeProps>;
    prefix: string;
    nodeClick?(event: MouseEvent, record: any): void;
    nodeDbClick?(event: MouseEvent, record: any): void;
    expand(e: any): void;
}
declare const TreeList: FC<TreeListProps>;
export default TreeList;
