import {useState} from 'react';
import Dropdown from "../../components/dropdown/index.jsx";
import {} from './main.css'
import Movie from "../../components/movie/index.jsx";
import {FAVORITE_OPTION, movieCategory} from "../../components/dropdown/utils/index.js";
import useDataPicker from "../../features/main/DataPicker/index.js";


const MainPage = () => {
    const [category, setCategory] = useState(FAVORITE_OPTION)
    let displayedData = useDataPicker(category);


    return (
        <div className={'main-page_container'}>
            <Dropdown optionList={movieCategory} onChange={setCategory}/>
            <div className={'movie-list_container'}>
                {Array.isArray(displayedData.results) && displayedData.results.length > 0 ? (
                    displayedData.results?.map((data) => (
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