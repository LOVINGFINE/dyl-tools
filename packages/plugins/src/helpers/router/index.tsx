import { lazy, ReactElement, useEffect } from "react";
import { Route, Routes, Outlet, useMatch, useNavigate } from "react-router-dom";

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

export const RouterItem = ({
  route,
  render,
  key,
}: {
  key: string;
  route: RouteItem;
  render(list: RouteItem[]): ReactElement[];
}) => {
  const navigate = useNavigate();
  const match = useMatch(route.path || "");
  useEffect(() => {
    if (route.path && match) {
      document.title = route.title || "";
      if (route.redirect && route.path !== route.redirect) {
        navigate(route.redirect, { replace: true });
      }
    }
  }, []);
  const LazyComponent = lazy(() => import(`@/${route.component}`));
  return (
    <Route
      key={key}
      path={route.path || "*"}
      element={
        <>
          {route.routes ? (
            <LazyComponent {...route}>
              <Outlet />
            </LazyComponent>
          ) : (
            <LazyComponent />
          )}
        </>
      }
    >
      {route.routes ? render(route.routes) : undefined}
    </Route>
  );
};

export const DynamicRouteProvider = ({
  routes,
}: DynamicRouteProviderProps): ReactElement => {
  const render = (list: RouteItem[]): ReactElement[] => {
    return list.map((ele: RouteItem, i: number) => {
      return RouterItem({ key: ele.name || "key-" + i, route: ele, render });
    });
  };
  return <Routes>{render(routes)}</Routes>;
};

export default {
  DynamicRouteProvider,
};
