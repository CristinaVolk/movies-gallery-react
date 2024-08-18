import {useEffect, useState} from "react";
import {fetchMovies} from "../../api/fetchMovies";

export const useSwitchLists = (isFavouriteTypeList) => {
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        setLoading(true)
        async function getMovies() {
            try {
                const response = await fetchMovies();
                if (response.ok) {
                    setMovies([...response.data])
                }
                setLoading(false)

            } catch (err) {
                console.log(err)
                setError(err.message)
            }
        }

        getMovies()
    }, []);

    function renderMovies() {
        return isFavouriteTypeList
            ? movies.filter(movie => movie.isFavourite)
            : movies
    }

    function updateMovies(movieId) {
        const updatedMovies = movies.map(movie => (
            movie.id === movieId
                ? {...movie, isFavourite: !movie.isFavourite}
                : {...movie}
        ))

        setMovies(updatedMovies)
    }

    return {
        loading,
        error,
        renderMovies,
        updateMovies
    }

}