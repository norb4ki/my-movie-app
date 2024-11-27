import {AUTH_TOKEN} from "../apiUtils/index.js";

export const API_BASE_URL = 'https://api.themoviedb.org/3';

export const defaultFetchOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${AUTH_TOKEN}`,
    },
};

export const postFetchOptions = {
    method: 'POST',
    headers: {
        ...defaultFetchOptions.headers,
        'Content-Type': 'application/json'
    }
}

