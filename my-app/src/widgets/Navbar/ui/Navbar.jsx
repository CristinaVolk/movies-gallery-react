import {Link} from "react-router-dom";
import {appRoutes, routesNames} from "../../../shared/consts/router";
import classes from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={classes.Navbar}>
            <Link to={appRoutes[routesNames.HOME]}>{routesNames.HOME}</Link>
            <Link to={appRoutes[routesNames.ALL_MOVIES]}>{routesNames.ALL_MOVIES}</Link>
            <Link to={appRoutes[routesNames.FAVOURITE_MOVIES]}>{routesNames.FAVOURITE_MOVIES}</Link>
        </nav>
    )
}