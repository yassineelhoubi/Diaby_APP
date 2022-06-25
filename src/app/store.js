import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import { api } from './api';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

// export const store = configureStore({
//   middleware: getDefaultMiddleware({
//     serializableCheck: false,
//   }).concat(api.middleware),
// });

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch) 

export default store;