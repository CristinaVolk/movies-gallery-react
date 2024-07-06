import {createBrowserRouter} from "react-router-dom";

import {App} from "../../ui/App";
import {MoviesPage} from "../../../pages/MoviesPage/ui/MoviesPage";
import {appRoutes, routesNames} from "../../../shared/consts/router";


export const router = createBrowserRouter([
    {
        path: appRoutes[routesNames.HOME],
        element: <App />,
        children: [
            {
                path: appRoutes[routesNames.ALL_MOVIES],
                element: <MoviesPage title={routesNames.ALL_MOVIES} isFavourite={false} />,
            },
            {
                path: appRoutes[routesNames.FAVOURITE_MOVIES],
                element: <MoviesPage title={routesNames.FAVOURITE_MOVIES} isFavourite={true} />,
            },
        ],
    },
]);