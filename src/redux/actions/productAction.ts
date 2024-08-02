export const getProducts = (payload) => ({
    type: 'GET_PRODUCTS',
    payload,
});
// import { PRODUCTS } from "../../config/urls";
// import { apiGet, setItem } from "../../utils/utils";
// import store from "../store";
// import types from "../types";

// const {dispatch} = store;

// const saveProductData = (data) => {
//     dispatch({
//         type: types.GET_PRODUCTS,
//         payload: data,
//     })
// }
// export function getProducts(data) {
//     return new Promise((resolve, reject) => {

//         return apiGet(PRODUCTS, data)
//         .then((res) => {
//             setItem(res)
//             .then(() => {

//                 saveProductData(res);
//                 resolve(res);
//             }).catch((error) => {
//                 reject(error);
//             })
//         }).catch((error) => {
//             reject(error);
//         })
//     })
        
//     }