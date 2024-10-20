import {movies} from "../../../../shared/data/movies.js";

export function mockFetchMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                ok: true,
                data: movies
            })
        }, 1000)
    })
}