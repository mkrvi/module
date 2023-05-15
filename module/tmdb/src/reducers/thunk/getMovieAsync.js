import {getMovieById} from "../../api/api";
import {getMovie} from "../moviesReducer";

function getMovieAsync(movie_id) {
    return (dispatch) => {
        getMovieById(movie_id)
            .then(response => {
                dispatch(getMovie(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}
export default getMovieAsync