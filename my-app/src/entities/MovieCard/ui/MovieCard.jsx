import { ReactComponent as HeartIcon } from '../../../shared/icons/favourite.svg';
import './MovieCard.css'
import {useMovieCard} from "../model/hooks/useMovieCard";

export const MovieCard = (props) => {
    const {movie, onClickMovieIcon} = props
    const {id, imageUrl, movieName, releaseYear, isFavourite, description} = movie
    const {handleIconClick} = useMovieCard(onClickMovieIcon)


    return (
        <li className="MovieCard">
            <img src={imageUrl} alt={movieName}/>
            <h3>{movieName}</h3>
            <strong>{releaseYear}</strong>
            <p>{description}</p>

            <HeartIcon
                className={isFavourite ? 'filled' : 'outlined'}
                onClick={()=> handleIconClick(id)}
            />
        </li>

    )
}