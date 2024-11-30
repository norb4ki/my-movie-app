import {useState} from 'react';
import Dropdown from "../../components/dropdown/index.jsx";
import {} from './main.css'
import Movie from "../../components/movie/index.jsx";
import {movieCategory, POPULAR_OPTION} from "../../components/dropdown/utils/index.js";
import useDataPicker from "../../features/main/DataPicker/index.js";

const MainPage = () => {
    const [category, setCategory] = useState(POPULAR_OPTION)
    let displayedData = useDataPicker(category);

    return (
        <div className={'main-page_container'}>
            <Dropdown optionList={movieCategory} onChange={setCategory}/>
            <div className={'movie-list_container'}>
                {displayedData.results?.length > 0 ? (
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