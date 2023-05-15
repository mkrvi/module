import { combineReducers } from 'redux'
import genresReducer from "./genresReducer";
import moviesReducer from "./moviesReducer";
import languageReducer from "./languageReducer";
import pageReducer from "./pageReducer";
import searchReducer from "./searchReducer";
export const rootReducer = combineReducers({
    genres:genresReducer,
    movies: moviesReducer,
    languages:languageReducer,
    page: pageReducer,
    searchValue: searchReducer,
})