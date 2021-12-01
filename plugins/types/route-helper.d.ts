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