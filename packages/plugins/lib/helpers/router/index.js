import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy } from "react";
import { Route, Routes, Outlet, useMatch, useNavigate } from "react-router-dom";
export const DynamicRouteProvider = ({ routes, }) => {
    const navigate = useNavigate();
    const render = (list) => {
        return list.map((ele, i) => {
            const match = useMatch(ele.path || "");
            if (ele.path && match) {
                document.title = ele.title || "";
                if (ele.redirect && ele.path !== ele.redirect) {
                    navigate(ele.redirect, { replace: true });
                }
            }
            const LazyComponent = lazy(() => import(`@/${ele.component}`));
            return (_jsx(Route, { path: ele.path || "*", element: _jsx(_Fragment, { children: ele.routes ? (_jsx(LazyComponent, { ...ele, children: _jsx(Outlet, {}) })) : (_jsx(LazyComponent, {})) }), children: ele.routes ? render(ele.routes) : undefined }, ele.name || "key-" + i));
        });
    };
    return _jsx(Routes, { children: render(routes) });
};
export default {
    DynamicRouteProvider,
};
