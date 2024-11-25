import React from 'react';
import Dropdown from "../../components/dropdown/index.jsx";
import fake from "./fake/index.js";
import Movie from "../../components/movie/index.jsx";


const MainPage = () => {
    return (
        <>
            <Dropdown>wel cum</Dropdown>
            {fake.map(value => <Movie {...value} />)}
        </>
    );
};

export default MainPage;