import {movies} from "../../../../shared/api/data/movies";

export const fetchMoviesData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ok: true, data: movies})
        }, 1000)
    })
}