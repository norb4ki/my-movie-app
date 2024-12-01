import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postFavoriteRequest} from "../../redux/slices/favorite/index.js";
import {} from './style.css'
import {isMovieFavorite} from "../../features/favorite/index.js";

const FavoriteButton = ({movie_id}) => {
    const dispatch = useDispatch();
    const is_favorite = useSelector(state=> isMovieFavorite(state, movie_id))
    const [favorite, setFavorite] = useState(is_favorite);

    useEffect(() => {
        const storedData = localStorage.getItem('reduxState');
        if (storedData) {
            const data = JSON.parse(storedData);
            console.log(data);
        }
    }, []);

    const handleFavoriteClick = () => {
        dispatch(postFavoriteRequest({
            body: { media_type: 'movie',media_id: movie_id,favorite:!favorite}
        }))
        setFavorite(!favorite)
    }

    return (
        <button onClick={handleFavoriteClick} className={'favorite-button'}>
            <p>{favorite ? ('Delete from favorite') : ('Add to favorite')}</p>
        </button>
    );
};

export default FavoriteButton;
