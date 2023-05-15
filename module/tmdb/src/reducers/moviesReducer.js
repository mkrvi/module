const initialState = {
    movies: [],
    selectedMovie: {},
    searchValue: '',
    favorite:[],
}

const GET_MOVIES = 'Get movies';
const GET_MOVIE = 'Get movie'
const SEARCH_FILM = 'Search film'

export const getMovies = (movies) => ({
    type: GET_MOVIES,
    payload: {movies}
})

export const getMovie = (movie) => ({
    type: GET_MOVIE,
    payload: {movie}
})

export const searchFilm = (movies) => ({
    type: SEARCH_FILM,
    payload: {movies}
})

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: action.payload.movies
            }
        case GET_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload.movie,
            }
        case SEARCH_FILM:
            return {
                ...state,
                movies: action.payload.movies
            }
        default:
            return state
    }
}

export default moviesReducer