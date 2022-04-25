import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy, useEffect } from "react";
import { Route, Routes, Outlet, useMatch, useNavigate } from "react-router-dom";
export const RouterItem = ({ route, render, key, }) => {
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
    return (_jsx(Route, { path: route.path || "*", element: _jsx(_Fragment, { children: route.routes ? (_jsx(LazyComponent, { ...route, children: _jsx(Outlet, {}) })) : (_jsx(LazyComponent, {})) }), children: route.routes ? render(route.routes) : undefined }, key));
};
export const DynamicRouteProvider = ({ routes, }) => {
    const render = (list) => {
        return list.map((ele, i) => {
            return RouterItem({ key: ele.name || "key-" + i, route: ele, render });
        });
    };
    return _jsx(Routes, { children: render(routes) });
};
export default {
    DynamicRouteProvider,
};
