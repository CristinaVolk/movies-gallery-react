import {SwitchMoviesList} from "../../../features/SwitchMoviesList/ui/SwitchMoviesList";

export const MoviesPage = (props) => {
    const {title, isFavourite} = props
    return (
        <>
            <h1>{title}</h1>
            <SwitchMoviesList isListTypeFavourite={isFavourite}/>
        </>
    )
}