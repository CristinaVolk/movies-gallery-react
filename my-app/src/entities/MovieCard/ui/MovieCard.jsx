import classes from "./MovieCard.module.css";
import { ReactComponent as HeartIcon } from '../../../shared/assets/icons/favourite.svg';

export const MovieCard = (props) => {
    const {movie, onHeartIconClick} = props
    const {
        id,
        imageUrl,
        movieName,
        releaseYear,
        isFavourite,
        description
    } = movie

    function handleClick() {
        onHeartIconClick(id)
    }

    return (
        <li className={classes.MovieCard}>
            <img src={imageUrl} alt={movieName}/>
            <h6>{movieName}</h6>
            <strong>{releaseYear}</strong>
            <p>{description}</p>
            <HeartIcon
                className={isFavourite ? classes.filled : classes.outlined}
                onClick={handleClick}
            />
        </li>
    )
}