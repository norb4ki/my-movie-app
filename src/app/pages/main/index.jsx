import React from 'react';
import Dropdown from "../../components/dropdown/index.jsx";
import fake from "./fake/index.js";
import Movie from "../../components/movie/index.jsx";


const MainPage = () => {
    return (
        <>

            {fake.map((value) => <Movie key={value.id} {...value} />)}
        </>
    );
};

export default MainPage;