import {useSwitchLists} from "../model/hooks/useSwitchLists";
import './SwitchMoviesLists.css'
import {MovieCard} from "../../../entities/MovieCard/ui/MovieCard";

export const SwitchMoviesLists = (props) => {
    const {isFavouriteTypeList} = props
    const {
        loading,
        error,
        renderMovies,
        updateMovies
    } = useSwitchLists(isFavouriteTypeList)
    const moviesContent = renderMovies();

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        moviesContent.length
            ? <ul>{
                    moviesContent
                        .map(movie =>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                onClickMovieIcon={updateMovies}
                            />
                        )
                }</ul>
            : null
    )
}