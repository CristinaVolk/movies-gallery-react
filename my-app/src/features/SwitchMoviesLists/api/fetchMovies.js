import {movies} from "./data/movies";

export function fetchMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve({ok: true, data: movies})
        }, 1000)
    })
}