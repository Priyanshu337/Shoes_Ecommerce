const initialState = {
    shoes: [],
    loading: false,
    error: null
};

export const getShoesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SHOES_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'GET_SHOES_SUCCESS':
            return {
                ...state,
                loading: false,
                shoes: action.payload,
                error: null
            };
        case 'GET_SHOES_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};


export const addShoesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_SHOES_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'ADD_SHOES_SUCCESS':
            return {
                ...state,
                loading: false,
                shoes: action.payload,
                error: null
            };
        case 'ADD_SHOES_FAILED':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;

    }

}

// export default { getShoesReducer, addShoesReducer };
