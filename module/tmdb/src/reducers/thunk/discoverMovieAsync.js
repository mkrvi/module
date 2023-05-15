import {getMovies} from "../moviesReducer";
import {discoverMovie} from "../../api/api";
import {updatePagination} from "../pageReducer";

const discoverMovieAsync = (genreId, language, page) => {
    return (dispatch) => {
        discoverMovie(genreId, language, page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(getMovies(response.data.results))
                console.log(response.data.results)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default discoverMovieAsync;