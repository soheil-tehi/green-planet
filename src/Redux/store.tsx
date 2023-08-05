import { configureStore } from "@reduxjs/toolkit";
import productsSlice, { productsApi } from "./productsSlice";
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        products: productsSlice,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;