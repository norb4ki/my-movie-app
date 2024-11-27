import {fetchData} from "../apiService/index.js";
import {DEFAULT_ACCOUNT_ID} from "../apiUtils/index.js";
import {postFetchOptions} from "../apiConfig/index.js";

export const getFavoriteMovies = async (page=1, language = 'en-US') =>{
    const endpoint = `/account/${DEFAULT_ACCOUNT_ID}/favorite/movies?language=${language}&page=${page}`;
    return await fetchData(endpoint)
}

export const editFavoriteMovies = async (body, isFavorite) =>{
    const options = {...postFetchOptions, body: JSON.stringify({...body, favorite:isFavorite})}
    const endpoint = `/account/${DEFAULT_ACCOUNT_ID}/favorite`;
    return await fetchData(endpoint, options)
}