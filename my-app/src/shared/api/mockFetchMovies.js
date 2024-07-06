import {movies} from "./data/movies";

export const mockFetchMovies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ok: true, data: movies})
        }, 1000)
    })
}