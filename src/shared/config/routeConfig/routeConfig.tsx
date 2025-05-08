import { RouteProps } from "react-router-dom";
import MainPage from "@pages/MainPage";
import AboutPage from "@pages/AboutPage";

export const AppRoutes = {
    MAIN: "main",
    ABOUT: "about",
} as const;

export type AppRouteKey = keyof typeof AppRoutes;

export const RoutePath: Record<AppRouteKey, string> = {
    MAIN: "/",
    ABOUT: "/about",
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
};
