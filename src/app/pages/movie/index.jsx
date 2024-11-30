import {useLocation} from "react-router-dom";
import {IMAGE_BASE_URL, POSTER_LARGE} from "../../services/apiUtils/index.js";
import {} from './style.css'
import FavoriteButton from "../../components/favorite/index.jsx";

const MoviePage = () => {
    const location = useLocation()
    const data = location.state?.data
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