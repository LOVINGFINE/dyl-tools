import { ReactElement } from "react";
/*** @interface */
export interface expendReducesOptions {
    extra: number;
    className: string;
    scrollHeight: number;
    scrollTop: number;
}
/*** @methods */
export declare function reduceChildrenSource(dataSource: {
    offset: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    child: ReactElement;
}[], options: expendReducesOptions): ReactElement<any, string | import("react").JSXElementConstructor<any>>[];
