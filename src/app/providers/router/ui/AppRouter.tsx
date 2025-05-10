import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "@shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <div className="page-wrapper">
            <Routes>
                {Object.values(routeConfig).map(({element, path}) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <div>{element}</div>
                        </Suspense>
                        }
                    />
                ))}
            </Routes>
        </div>
    );
};

export default AppRouter;