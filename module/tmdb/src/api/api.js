import axios from "axios";
import {API_KEY} from "../config/config";


const url = "https://api.themoviedb.org/3/";
export const imageUrl = 'https://image.tmdb.org/t/p/w500'

const tmdbApi = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
        Authorization: API_KEY,
    }
});

export const getGenresList = function() {
   return tmdbApi.get('/genre/movie/list');
}

export function getLanguagesList() {
    return tmdbApi.get('configuration/languages')
}

export const searchMovie = function (query, page) {
    return tmdbApi.get('/search/movie', {
        params: {
            query,
            language: 'en-US',
            page,
        },
    });
}

export function discoverMovie(genreId,language, page) {
    return tmdbApi.get(`/discover/movie`, {
        params: {
            page,
            with_original_language:language,
            with_genres:genreId
        },
    });
}

export function getMovieById(id) {
    return tmdbApi.get(`/movie/${id}`)
}


