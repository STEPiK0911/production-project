import { RouteProps } from "react-router-dom";
import MainPage from "@pages/MainPage";
import AboutPage from "@pages/AboutPage";
import {NotFoundPage} from "@pages/NotFoundPage";

export const AppRoutes = {
    MAIN: "main",
    ABOUT: "about",
    NOT_FOUND: "not-found",
} as const;

export type AppRouteKey = keyof typeof AppRoutes;

export const RoutePath: Record<AppRouteKey, string> = {
    MAIN: "/",
    ABOUT: "/about",
    NOT_FOUND: "*",
};

export const routeConfig: Record<AppRouteKey, RouteProps> = {
    MAIN: {
        path: RoutePath.MAIN,
        element: <MainPage />,
    },
    ABOUT: {
        path: RoutePath.ABOUT,
        element: <AboutPage />,
    },
    NOT_FOUND: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage/>,
    },
};
