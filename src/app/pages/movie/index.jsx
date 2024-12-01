import {useEffect, useState} from "react";
import {IMAGE_BASE_URL, POSTER_LARGE} from "../../services/apiUtils/index.js";
import {} from './style.css'
import FavoriteButton from "../../components/favorite/index.jsx";

const MoviePage = () => {
    const [data, setData] = useState(null);
    const currentURL = window.location.href;
    const match = currentURL.match(/movie\/id\/(\d+)/);
    const id = match[1]

    useEffect(() => {
        const storedData = localStorage.getItem(`movieData/${id}`);
        if (storedData) {
            setData(JSON.parse(storedData));
        } else {
            console.error("No movie data found in localStorage.");
        }
    }, []);

    if (!data) {
        return <div>Loading movie details...</div>;
    }

    const posterPath = `${IMAGE_BASE_URL}${POSTER_LARGE}${data.poster_path}`;

    return (
        <div className="movie-page_container">
            <img src={posterPath} alt={`${data.title} Poster`} className="movie-page_poster"/>
            <div className="movie-page_details">
                <h1 className="movie-page_title">{data.title}</h1>
                <p>Release Date: {data.release_date}</p>
                <div className="movie-page_overview">
                    <h2>Overview</h2>
                    <p>{data.overview}</p>
                </div>
                <div className="movie-page_stats">
                    <p>Vote Average: {data.vote_average}</p>
                </div>
                <FavoriteButton movie_id={data.id}/>
            </div>

        </div>
    );
};

export default MoviePage;