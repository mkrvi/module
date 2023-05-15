export const initialState = {
    genres:[],
    genresId:[],
}

const GET_GENRES = 'Get genres';
const UPDATE_GENRES_ID = 'Update genres id';

// export const addGenreId = (genreID)=>({
//     type:ADD_GENRE_ID,
//     payload: {genreID},
// })

export const getGenres = (genres) => ({
    type: GET_GENRES,
    payload: {genres}
})

export const updateGenresId = (genreId) => ({
    type: UPDATE_GENRES_ID,
    payload: {genreId}
})

const genresReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload.genres
                // genres: action.payload.genres.map(item => {
                //     return {
                //         ...item,
                //     }
                // })
            }
        // case ADD_GENRE_ID:
        //     return {
        //         ...state,
        //         // genresId: [...state.genresId, action.payload.genreId],
        //         genresId: state.genresId.push(action.payload.genreId)
        //     };

        case UPDATE_GENRES_ID:
            return {
                ...state,
                genresId: [],
            }

        default:
            return state
    }
}

export default genresReducer;