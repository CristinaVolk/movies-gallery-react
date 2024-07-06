import {useEffect, useState} from "react";
import {mockFetchMovies} from "../../../../shared/api/mockFetchMovies";

export const useSwitchMoviesLists = (isListTypeFavourite) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getMoviesData(){
            try {
                setLoading(true)
                const {ok, data} = await mockFetchMovies();
                if (ok) {
                    setMovies([...data])
                }
                setLoading(false)
            } catch (err) {
                setError(err.message)
            }
        }

        getMoviesData()
    }, []);


    function renderMovies() {
        return (isListTypeFavourite && movies.length) ? movies.filter(movie => movie.isFavourite) : movies
    }

    function onHeartIconClick(id) {
        const updatedMovies = movies.map(movie =>
            movie.id === id
                ? {...movie, isFavourite: !movie.isFavourite}
                : {...movie})

        setMovies(updatedMovies)
    }

    return {
        loading,
        error,
        movies,
        renderMovies,
        onHeartIconClick
    }
}