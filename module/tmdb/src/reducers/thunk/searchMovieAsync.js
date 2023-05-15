import {searchMovie} from "../../api/api";
import {updatePagination} from "../pageReducer";
import {searchFilm} from "../moviesReducer";

const searchMovieAsync = (query, page) => {
    return (dispatch) => {
        searchMovie(query, page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(searchFilm(response.data.results))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default searchMovieAsync;