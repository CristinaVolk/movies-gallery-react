import {useSwitchMoviesLists} from "../model/hooks/useSwitchMoviesLists.js";
import classes from './SwitchMoviesLists.module.css'
import {MovieCard} from "../../../entities/MovieCard/ui/MovieCard.jsx";

export const SwitchMoviesLists = (props) => {
    const {isListTypeFavourite} = props
    const {
        isLoading,
        movies,
        renderMovies,
        updateMovies
    } = useSwitchMoviesLists(isListTypeFavourite)


    if (isLoading) {
        return <h1>Loading ...</h1>
    }

    return (
        <ul>
            {!!movies.length &&
                renderMovies().map(movie => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        updateMovies={updateMovies}
                    />
                ))
            }
        </ul>
    )

}