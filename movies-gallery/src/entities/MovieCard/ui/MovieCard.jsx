import classes from './MovieCard.module.css'
import {HeartIcon} from "../../../shared/assets/icons/HeartIcon.jsx";


export const MovieCard = (props) => {
    const {movie, updateMovies} = props
    const {id, imageUrl, movieName, releaseYear, isFavourite, description} = movie

    function handleIconClick() {
        console.log(id)
        updateMovies(id)
    }

    return (
        <li className={classes.MovieCard}>
            <img alt="movie avatar" src={imageUrl} />
            <h3>{movieName}</h3>
            <strong>{releaseYear}</strong>
            <p>{description}</p>

            <HeartIcon
                className={isFavourite ? classes.filled : classes.outlined}
                onClick={(handleIconClick)}
            />
        </li>
    )
}