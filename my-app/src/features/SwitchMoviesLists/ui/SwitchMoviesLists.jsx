import {useSwitchMoviesLists} from "../model/hooks/useSwitchMoviesLists";
import classes from "./SwitchMoviesLists.module.css";
import {MovieCard} from "../../../entities/MovieCard/ui/MovieCard";

export const SwitchMoviesLists = (props) => {
    const {isListTypeFavourite} = props
    const {
        loading,
        movies,
        error,
        renderMovies,
        onHeartIconClick
    } = useSwitchMoviesLists(isListTypeFavourite)


    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <ul className={classes.SwitchMoviesLists}>
            {!renderMovies().length
                ? <h1>No movies yet...</h1>
                :  renderMovies().map(movie =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onHeartIconClick={onHeartIconClick}
                    />)
            }

        </ul>
    )
}