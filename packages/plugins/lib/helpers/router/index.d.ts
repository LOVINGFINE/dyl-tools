import { ReactElement } from "react";
export interface DynamicRouteProviderProps {
    routes: RouteItem[];
}
export interface RouteItem {
    name: string;
    exact?: boolean;
    title?: string;
    component?: string;
    icon?: string | React.ReactElement;
    path?: string;
    redirect?: string;
    routes?: Array<RouteItem>;
    parent?: RouteItem;
}
export interface RouteConsumerOptions {
    name: string;
    exact?: boolean;
    title?: string;
    component?: string;
    icon?: string | React.ReactElement;
    redirect?: string;
    parent?: RouteItem;
}
export declare const DynamicRouteProvider: ({ routes, }: DynamicRouteProviderProps) => ReactElement;
declare const _default: {
    DynamicRouteProvider: ({ routes, }: DynamicRouteProviderProps) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
};
export default _default;
