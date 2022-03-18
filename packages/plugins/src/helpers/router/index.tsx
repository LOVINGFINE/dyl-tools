import { lazy, ReactElement } from "react";
import { Route, Routes, Outlet } from "react-router-dom";

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
export const DynamicRouteProvider = ({
  routes,
}: DynamicRouteProviderProps): ReactElement => {
  const render = (list: RouteItem[]): ReactElement[] => {
    return list.map((ele: RouteItem, i: number) => {
      const LazyComponent = lazy(() => import(`@/${ele.component}`));
      return (
        <Route
          key={ele.name || "key-" + i}
          path={ele.path || "*"}
          element={
            <>
              {ele.routes ? (
                <LazyComponent {...ele}>
                  <Outlet />
                </LazyComponent>
              ) : (
                <LazyComponent />
              )}
            </>
          }
        >
          {ele.routes ? render(ele.routes) : undefined}
        </Route>
      );
    });
  };
  return <Routes>{render(routes)}</Routes>;
};

export default {
  DynamicRouteProvider,
};
