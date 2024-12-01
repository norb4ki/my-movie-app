import {fetchData} from "../apiService/index.js";

export const getPopularMovies = async (page=1, language = 'en-US') =>{
    const endpoint = `/movie/now_playing?language=${language}&page=${page}`;
    console.log('fetch pop')
    return await fetchData(endpoint)
}

export const getAirMovies = async (page =1, language='en-US') => {
    const endpoint = `/movie/now_playing?language=${language}&page=${page}`;
    console.log('fetch air')
    return await fetchData(endpoint)
}

