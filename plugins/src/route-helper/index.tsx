import { lazy, ReactElement } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import { RouteItem, DynamicRouteProviderProps } from "../../types/route-helper";

const DynamicRouteProvider = ({
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
                <LazyComponent routes={ele.routes} path={ele.path}>
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

export default DynamicRouteProvider;
