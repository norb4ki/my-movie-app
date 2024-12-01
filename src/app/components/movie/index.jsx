import React from 'react';
import {} from './movie.css';
import { ERoutePaths } from "../../common/route/enum/index.js";
import { IMAGE_BASE_URL, POSTER_LARGE } from "../../services/apiUtils/index.js";

const Movie = ({ data }) => {
    const handleCardClick = () => {
        const movieUrl = `${window.location.origin}${ERoutePaths.MOVIE_PATH}${data.id}`;
        localStorage.setItem(`movieData/${data.id}`, JSON.stringify(data)); // Save data to localStorage
        window.open(movieUrl, '_blank'); // Open in new tab
    };

    const imagePath = IMAGE_BASE_URL.concat(POSTER_LARGE).concat('/').concat(data.backdrop_path);

    return (
        <div tabIndex={0} className={'card_container'} onClick={handleCardClick}>
            <div className={'card_image-container'}>
                <img src={imagePath} alt="poster" />
            </div>
            <div className={'movie-card_title'}>{data.title}</div>{data.title}
            <div className={'movie-card_overview'}>{data.overview}</div>
        </div>
    );
};

export default Movie;
