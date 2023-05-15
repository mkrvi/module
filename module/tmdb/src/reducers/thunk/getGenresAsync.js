import {getGenresList} from "../../api/api";
import {getGenres} from "../genresReducer";

const getGenresAsync = () => {
    return (dispatch) => {
        getGenresList()
            .then(response => {
                dispatch(getGenres(response.data.genres))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getGenresAsync;