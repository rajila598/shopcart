import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import {productReducer} from "./productReducers";
import types from "../types";
import { cartReducers } from "./cartReducers";

const appReducer = combineReducers({
    authReducer,
    productReducer,
    cartReducers,
})

const rootReducer = (state, action) => {
    if(action.type == types.CLEAR_REDUX_STATE){
        state = undefined
    }
    return appReducer(state, action)
}
export default rootReducer