import React from 'react';
import {useParams} from "react-router-dom";

const MoviePage = () => {
    const {movieId} = useParams()
    return (
        <div>
here is moviepage
            movieID: {movieId}
        </div>
    );
};

export default MoviePage;