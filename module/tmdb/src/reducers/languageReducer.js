export const initialState = {
    languages: [],
    selectedLanguage:[],
}
const GET_LANGUAGES = 'Get languages'
const UPDATE_LANGUAGES = 'Update languages'

export const getLanguages = (languages) => ({
    type: GET_LANGUAGES,
    payload: {languages}

})
export const updateLanguages = (language) => ({
    type: UPDATE_LANGUAGES,
    payload: {language}
})
const languageReducer = (state= initialState, action) => {
    console.log(initialState.selectedLanguage)
    switch (action.type) {
        case GET_LANGUAGES:
            return {
                ...state,
                languages: action.payload.languages
            }
        case UPDATE_LANGUAGES:
            return {
                ...state,
                selectedLanguage: [],
            }
        default:
            return state
    }
}
export default languageReducer