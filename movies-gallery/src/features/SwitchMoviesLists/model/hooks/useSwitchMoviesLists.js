import {useEffect, useState} from "react";
import {mockFetchMovies} from "../services/mockFetchMovies.js";

export const useSwitchMoviesLists = (isListTypeFavourite) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setIsLoading(true)
        async function getMovies() {
            const response = await mockFetchMovies()
            if (response.ok) {
                setMovies(prev => response.data)
                setIsLoading(false)
            }
        }

        getMovies()
    }, []);

    function renderMovies() {
        return isListTypeFavourite
            ? movies.filter(movie => movie.isFavourite)
            : movies
    }

    function updateMovies(movieId) {
        const updatedMovies = movies.map((movie) => {
            return (movie.id === movieId)
                ?  {...movie, isFavourite: !movie.isFavourite }
                : {...movie}
        })

        setMovies(updatedMovies)
    }

    return {
        isLoading,
        movies,
        renderMovies,
        updateMovies
    }
}