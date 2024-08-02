import types from "../types";
export const cartReducers = (state = [], action) => {
    switch (action.type) {
        case types.SET_CART:
            return action.payload;
        case types.ADD_ITEM: {
            const product = action.payload;
            let temp = [...state];
            if (temp.find((el) => el._id === product._id)) {
                temp = temp.map((el) =>
                    el._id === product._id ? { ...el, quantity: el.quantity + 1 } : el
                );
            } else {
                temp.push({ ...product, quantity: 1 });
            }

            return temp;
        }
        
        case types.REMOVE_ITEM: {
            if (action.payload === undefined) {
                console.error("REMOVE_ITEM action payload is undefined");
                return state;
            }
            const productId = action.payload;
            return state.filter((el) => el.id !== productId);
        }
        case types.INCREMENT_ITEM: {
            const productId = action.payload;
            return state.map((el) =>
                el._id === productId ? { ...el, quantity: el.quantity + 1 } : el
            );
        }

        case types.DECREMENT_ITEM: {
            const productId = action.payload;
            let temp = state.map((el) =>
              el._id === productId ? { ...el, quantity: el.quantity - 1 } : el
            );
            return temp.filter((el) => el.quantity > 0);
          }
        default:
            return state

    }
}