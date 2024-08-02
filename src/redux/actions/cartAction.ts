// import { createAction } from '@reduxjs/toolkit';
// import { CartItem } from '../reducers/cartReducer';

// export const addToCart = createAction<CartItem>('cart/addToCart');
// export const updateStock = createAction<{ productId: number, quantity: number }>('cart/updateStock');
// export const removeFromCart = createAction<{ productId: number }>('cart/removeFromCart');
// export const updateCartQuantity = createAction<{ productId: number, quantity: number }>('cart/updateCartQuantity');
// export const clearCart = createAction('cart/clearCart');

import types from "../types";
export const addItemToCart=(data)=> ({
    type: types.ADD_ITEM,
    payload: data,
})
export const removeItemFromCart=(index)=> ({
    type: types.REMOVE_ITEM,
    payload: index,
})
export const incrementItem = (productId) => ({
    type: types.INCREMENT_ITEM,
    payload: productId,
  });
  
  export const decrementItem = (productId) => ({
    type: types.DECREMENT_ITEM,
    payload: productId,
  });