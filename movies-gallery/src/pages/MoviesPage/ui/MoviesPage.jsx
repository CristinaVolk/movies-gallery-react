import {SwitchMoviesLists} from "../../../features/SwitchMoviesLists/ui/SwitchMoviesLists.jsx";

export const MoviesPage = (props) => {
    const {title, isListTypeFavourite} = props

    return (
        <>
            <h1>{title}</h1>
            <SwitchMoviesLists isListTypeFavourite={isListTypeFavourite} />
        </>
    )
}