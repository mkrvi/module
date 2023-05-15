export const initialState = {
    pagination: {
        page: 1,
        totalPages: 0
    },
}

const UPDATE_PAGINATION = 'UPDATE_PAGINATION'

export const updatePagination = (totalPages, page) => ({
    type: UPDATE_PAGINATION,
    payload: {totalPages, page},
})

const pageReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_PAGINATION:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    page: action.payload.page,
                    totalPages: action.payload.totalPages
                }
            }
        default:
            return state
    }
}

export default pageReducer;