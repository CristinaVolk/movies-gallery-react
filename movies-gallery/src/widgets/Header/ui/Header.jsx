import {NavLink} from "react-router-dom";
import {routesNames, routesPaths} from "../../../shared/consts/router.js";
import classes from './Header.module.css'

export const Header = () => {
    return (
        <nav>
            <NavLink to={routesPaths[routesNames.HOME]}>{routesNames.HOME}</NavLink>

            <NavLink to={routesPaths[routesNames.ALL_MOVIES]}>{routesNames.ALL_MOVIES}</NavLink>

            <NavLink to={routesPaths[routesNames.FAVOURITE_MOVIES]}>{routesNames.FAVOURITE_MOVIES}</NavLink>
        </nav>
    )
}