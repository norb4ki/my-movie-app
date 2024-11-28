import {API_BASE_URL, defaultFetchOptions} from "../apiConfig/index.js";

export const fetchData = async (endpoint, options = {}) =>{
    const url = `${API_BASE_URL}${endpoint}`;
    const mergedOptions = {...defaultFetchOptions, ...options};

    try{
        const response = await fetch(url, mergedOptions);
        if(!response.ok){
            throw new Error(`HTTP Error ${response.status} ${response.statusText}`)
        }
        const dataR = await response.json();
        console.log(dataR)
        return dataR;
    } catch(error){
        console.error('Fetch Error', error);
        throw error;
    }
}