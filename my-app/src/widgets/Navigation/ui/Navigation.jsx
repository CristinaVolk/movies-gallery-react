import {NavLink} from "react-router-dom";
import {appRoutes, routesNames} from "../../../shared/consts/router";
import './Navigation.css'

export const Navigation = () => {
    return (
        <nav>
            <NavLink to={appRoutes[routesNames.HOME]}>{routesNames.HOME}</NavLink>
            <NavLink to={appRoutes[routesNames.ALL_MOVIES]}>{routesNames.ALL_MOVIES}</NavLink>
            <NavLink to={appRoutes[routesNames.FAVOURITE]}>{routesNames.FAVOURITE}</NavLink>
        </nav>
    )
}