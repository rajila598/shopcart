const initialState = {};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                [action.payload.category]: action.payload.products,
            };
        default:
            return state;
    }
};