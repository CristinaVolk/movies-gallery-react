import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import {App} from "../../ui/App";
import {appRoutes, routesNames} from "../../../shared/consts/router";
import {MoviesPage} from "../../../pages/MoviesPage/ui/MoviesPage";


export const router = createBrowserRouter([
    {
        path: appRoutes[routesNames.HOME],
        element: <App />,
        children: [
            {
                path: appRoutes[routesNames.ALL_MOVIES],
                element: <MoviesPage title={routesNames.ALL_MOVIES} />,
            },
            {
                path: appRoutes[routesNames.FAVOURITE],
                element: <MoviesPage title={routesNames.FAVOURITE} isFavouriteTypeList />,
            },
        ],
    },
]);