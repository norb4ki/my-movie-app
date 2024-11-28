import React, {useEffect, useState} from 'react';
import Dropdown from "../../components/dropdown/index.jsx";
import {} from './main.css'
import Movie from "../../components/movie/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAirRequest} from "../../redux/slices/movie/index.js";
import {postFavoriteRequest} from "../../redux/slices/favorite/index.js";
import {movieCategory, POPULAR_OPTION} from "../../components/dropdown/utils/index.js";


const MainPage = () => {
    const dispatch = useDispatch();
    const { popularData, airData, loading, error } = useSelector(
        (state) => state.movieReducer
    );
    const [category, setCategory] = useState(POPULAR_OPTION)

    useEffect(() => {
        dispatch(getAirRequest({ page: 1, language: "en-US" }));

    }, [dispatch]);

    useEffect(() => {
        console.log(airData)
    },[airData])
    const handleToggleFavorite = (movie, isFavorite) => {
        dispatch(
            postFavoriteRequest({
                body: { media_type: 'movie',media_id: movie.id,                    },
                isFavorite,
            })
        );
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div className={'main-page_container'}>
            <Dropdown optionList={movieCategory} onChange={setCategory}/>
            <div className={'movie-list_container'}>
                {Array.isArray(airData.results) && airData.results.length > 0 ? (
                    airData.results?.map((data) => (
                        <Movie key={data.id} data={data}/>
                    ))
                ) : (
                    <div className={'text_no-data'}>No movies available</div>
                )}
            </div>
        </div>
    );
};

export default MainPage;