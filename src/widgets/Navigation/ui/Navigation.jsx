import {Link} from "react-router-dom";
import classes from "./Navigation.module.css";
import {appRoutes, routesNames} from "../../../shared/consts/router";

export const Navigation = () => {
    return (
        <nav className={classes.Navigation}>
            <Link to={'/'}>Home</Link>
            <Link to={appRoutes[routesNames.ALL_MOVIES]}>All Movies</Link>
            <Link to={appRoutes[routesNames.FAVOURITE_MOVIES]}>Favourite Movies</Link>
        </nav>
    )
}