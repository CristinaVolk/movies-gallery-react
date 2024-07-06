import {Link} from "react-router-dom";
import classes from "./Navigation.module.css";
import {appRoutes, routesNames} from "../../../shared/consts/router";

export const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <Link to={appRoutes[routesNames.HOME]}>{routesNames.HOME}</Link>
            <Link to={appRoutes[routesNames.ALL_MOVIES]}>{routesNames.ALL_MOVIES}</Link>
            <Link to={appRoutes[routesNames.FAVOURITE_MOVIES]}>{routesNames.FAVOURITE_MOVIES}</Link>
        </nav>
    )
}