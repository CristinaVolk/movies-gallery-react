import classes from "./MovieCard.module.css";
import { ReactComponent as HeartIcon } from '../../../shared/icons/favourite.svg';

export const MovieCard = (props) => {
    const {movie, onListClick} = props
    const {id, description, movieName, releaseYear, isFavourite, imageUrl} = movie

    function handleIconClick() {
        onListClick(id)
    }

    return (
        <li className={classes.MovieCard}>
            <img src={imageUrl} alt={movieName}/>
            <strong>{releaseYear}</strong>
            <p>{description}</p>
            <HeartIcon
                className={`${isFavourite ? classes.filled : classes.outlined}`}
                onClick={handleIconClick}
            />
        </li>
    )
}