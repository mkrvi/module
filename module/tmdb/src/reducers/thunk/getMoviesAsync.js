import {discoverMovie, getPopularList} from "../../api/api";
import {getMovies} from "../moviesReducer";
import {updatePagination} from "../pageReducer";


const getMoviesAsync = (page) => {
    return (dispatch) => {
        discoverMovie(page)
            .then(response => {
                dispatch(updatePagination(response.data.total_pages, response.data.page))
                dispatch(getMovies(response.data.results))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getMoviesAsync;