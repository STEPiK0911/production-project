import { RouteProps } from "react-router-dom";
import MainPage from "@pages/MainPage";
import AboutPage from "@pages/AboutPage";
import {NotFoundPage} from "@pages/NotFoundPage";
import {ProfilePage} from "@pages/ProfilePage";

export const AppRoutes = {
    MAIN: "main",
    ABOUT: "about",
    PROFILE: "profile",
    //last
    NOT_FOUND: "not-found",
} as const;

export type AppRouteKey = keyof typeof AppRoutes;

export const RoutePath: Record<AppRouteKey, string> = {
    MAIN: "/",
    ABOUT: "/about",
    PROFILE: "/profile",
    //last
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
    PROFILE: {
        path: RoutePath.PROFILE,
        element: <ProfilePage/>
    },
    NOT_FOUND: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage/>,
    },
};
