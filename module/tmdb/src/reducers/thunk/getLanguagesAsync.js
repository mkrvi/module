import {getLanguagesList} from "../../api/api";
import {getLanguages} from "../languageReducer";

const getLanguagesAsync = () => {
    return (dispatch) => {
        getLanguagesList()
            .then(response => {
                dispatch(getLanguages(response.data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export default getLanguagesAsync;