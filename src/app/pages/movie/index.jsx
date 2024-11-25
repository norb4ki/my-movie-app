import React from 'react';
import {useParams} from "react-router-dom";

const MoviePage = () => {
    const {movieID} = useParams()
    return (
        <div>
here is moviepage
            movieID: {movieID}
        </div>
    );
};

export default MoviePage;