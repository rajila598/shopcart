import {configureStore} from '@reduxjs/toolkit';
import RootReducer from './reducers/index';

const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        immutableCheck: false, // Disable immutable state check
        serializableCheck: false, // Disable serializable state check
    }),
});
export default store;
