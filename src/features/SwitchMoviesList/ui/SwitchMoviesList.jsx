import {useSwitchMoviesList} from "../model/hooks/useSwitchMoviesList";
import classes from "./SwitchMoviesLists.module.css";
import {MovieCard} from "../../../entities/MovieCard/ui/MovieCard";

export const SwitchMoviesList = (props) => {
    const {isListTypeFavourite} = props
    const {
        movies,
        loading,
        error,
        updateMoviesHandler,
        renderMovies
    } = useSwitchMoviesList(isListTypeFavourite)


    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <>

            {!movies.length && <h2>No movies yet...</h2>}
            {movies.length && (
                <ul className={classes.SwitchMoviesLists}>
                    {
                        renderMovies()
                        .map(movie => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onUpdateMoviesClick={updateMoviesHandler}
                            />
                        ))
                    }
                </ul>
            )}
        </>

    )
}