import { ReactElement } from "react";
declare const source: Array<emptyConfigItem>;
export interface emptyConfigItem {
    type: string;
    icon: unknown;
    title: string;
    text?: string[];
    bottom?: ReactElement;
}
export default source;
