import React from 'react';
import {useNavigate} from "react-router-dom";
import {} from './movie.css'
import {ERoutePaths} from "../../common/route/enum/index.js";
import {IMAGE_BASE_URL, POSTER_LARGE, POSTER_MEDIUM} from "../../services/apiUtils/index.js";

const Movie = ({data}) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`${ERoutePaths.MOVIE_PATH}${data.id}`, { state: { data } });
    };
    const imagePath = IMAGE_BASE_URL.concat(POSTER_LARGE).concat('/').concat(data.backdrop_path)
    return (
        <div className={'card_container'} onClick={handleCardClick}>
            <div className={'card_image-container'}>
                <img src={imagePath} alt="poster"/>
            </div>
            <div className={'movie-card_title'}>{data.title}</div>{data.title}
            <div className={'movie-card_overview'}>{data.overview}</div>
        </div>
    );
};

export default Movie;