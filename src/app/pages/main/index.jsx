import {useEffect, useState} from 'react';
import Dropdown from "../../components/dropdown/index.jsx";
import {} from './main.css'
import Movie from "../../components/movie/index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAirRequest} from "../../redux/slices/movie/index.js";
import {movieCategory, POPULAR_OPTION} from "../../components/dropdown/utils/index.js";
import {getFavoriteRequest} from "../../redux/slices/favorite/index.js";


const MainPage = () => {
    const dispatch = useDispatch();
    const { popularData, airData} = useSelector(
        (state) => state.movieReducer);
    const {data} = useSelector(state => state.favoriteReducer)
    const [category, setCategory] = useState(POPULAR_OPTION)

    useEffect(() => {
        dispatch(getFavoriteRequest({ page: 1, language: "en-US" }));

    }, [dispatch]);

    useEffect(() => {
        console.log(airData)
    },[airData])

    return (
        <div className={'main-page_container'}>
            <Dropdown optionList={movieCategory} onChange={setCategory}/>
            <div className={'movie-list_container'}>
                {Array.isArray(data.results) && data.results.length > 0 ? (
                    data.results?.map((data) => (
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