/*** @interface */
export interface expendReducesOptions {
    expandKeys?: string[];
    childrenKey?: string;
    height: number;
    extra: number;
}
export interface FlattenOptions {
    level?: number;
    parentKey?: string | number | null;
}
/*** @methods */
export declare function reduceTreeSource(dataSource: any[], options: expendReducesOptions): any[];
