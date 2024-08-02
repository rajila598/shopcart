export default {
    LOGIN: "LOGIN",
    LOGOUT: 'LOGOUT',
    CLEAR_REDUX_STATE: "CLEAR_REDUX_STATE",
    GET_PRODUCTS: 'GET_PRODUCTS',
    SET_CART: 'SET_CART',
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    INCREMENT_ITEM: "INCREMENT_ITEM",
    DECREMENT_ITEM: "DECREMENT_ITEM",
}

export type ProdStackParamList = {
    ProductHome: undefined;
    Search: undefined;
    ProductDetail: { productId: number };
};

