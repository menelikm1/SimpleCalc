const calculationsReducer = (state, action) => {
    switch(action.type) {
        case 'CALC':
            return {
                ...state,
                values: action.payload
            }
        case 'CLEAR':
            return {
                ...state,
                values: 0
            }
        default:
            return state
    }
}

export default calculationsReducer