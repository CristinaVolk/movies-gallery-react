import {useEffect, useState} from "react";
import {fetchMoviesData} from "../api/fetchMoviesData";

export const useSwitchMoviesList = (isListTypeFavourite) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchMovies() {
            try {
                setLoading(true)
                const response = await fetchMoviesData()
                if (response.ok) {
                    setMovies(response.data)
                    setLoading(false)
                }
            } catch (error) {
                setError(error.message)
            }
        }

        fetchMovies()
    }, []);

    function renderMovies() {
        return (movies.length && isListTypeFavourite) ? movies.filter(movie => movie.isFavourite) : movies;
    }

    function listHandler(id) {
        const updatedMovies = movies.map(movie =>
            movie.id === id
                ? {...movie, isFavourite: !movie.isFavourite}
                : {...movie}
        )
        setMovies(updatedMovies)
    }

    return {
        movies,
        loading,
        error,
        setMovies,
        listHandler,
        renderMovies,
    }
}