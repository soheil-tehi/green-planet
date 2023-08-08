import { configureStore } from "@reduxjs/toolkit";
import productsSlice, { productsApi, housePlantsApi, succulentPlantsApi, cactusPlantsApi } from "./productsSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import cartSlice from "./cartSlice";
import blogSlice, { blogsApi } from "./blogSlice";

const store = configureStore({
    reducer: {
        cart: cartSlice,
        products: productsSlice,
        blogs: blogSlice,
        [productsApi.reducerPath]: productsApi.reducer,
        [housePlantsApi.reducerPath]: housePlantsApi.reducer,
        [succulentPlantsApi.reducerPath]: succulentPlantsApi.reducer,
        [cactusPlantsApi.reducerPath]: cactusPlantsApi.reducer,
        [blogsApi.reducerPath]: blogsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            productsApi.middleware,
            housePlantsApi.middleware,
            succulentPlantsApi.middleware,
            cactusPlantsApi.middleware,
            blogsApi.middleware,
        ]),
})

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export default store;