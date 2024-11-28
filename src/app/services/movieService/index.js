import {fetchData} from "../apiService/index.js";

export const getPopularMovies = async (page=1, language = 'en-US') =>{
    const endpoint = `/movie/now_playing?language=${language}&page=${page}`;
    return await fetchData(endpoint)
}

export const getAirMovies = async (page =1, language='en-US') => {
    const endpoint = `/movie/now_playing?language=${language}&page=${page}`;
    return await fetchData(endpoint)
}

