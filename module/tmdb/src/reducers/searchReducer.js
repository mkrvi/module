export const initialState = {
    searchValue: '',
}

const UPDATE_SEARCH_VALUE = 'Update search value'

export const updateSearchValue = (newValue) => ({
    type: UPDATE_SEARCH_VALUE,
    payload: {newValue},
})

const searchReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_VALUE:
            return {
                ...state,
                searchValue: action.payload.newValue
            }
        default:
            return state
    }
}

export default searchReducer;