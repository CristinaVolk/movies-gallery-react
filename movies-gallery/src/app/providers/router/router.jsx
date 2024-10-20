import {createBrowserRouter} from "react-router-dom";

import {App} from "../../ui/App.jsx";
import {MoviesPage} from "../../../pages/MoviesPage/ui/MoviesPage.jsx";
import {routesNames, routesPaths} from "../../../shared/consts/router.js";

export const router = createBrowserRouter([
    {
        path: routesPaths[routesNames.HOME],
        element: <App />,
        children: [
            {
                path: routesPaths[routesNames.ALL_MOVIES],
                element: <MoviesPage title={routesNames.ALL_MOVIES} />,
            },
            {
                path: routesPaths[routesNames.FAVOURITE_MOVIES],
                element: <MoviesPage title={routesNames.FAVOURITE_MOVIES} isListTypeFavourite />,
            },
        ],
    },
]);