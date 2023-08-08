import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface PlantsProps {
    _id: string,
    productName: string,
    price: number,
    heightPlant: number,
    heightPot: number,
    imageCover: string,
    imageDescription: string,
    description: string,
    category: string
}


interface InitialStateProps {
    // productList: [],
    // housePlantsList: [],
    // succulentList: [],
    // cactusList: [],
    productById: PlantsProps,
    loading: boolean,
    hasError: boolean,
}

const initialState: InitialStateProps = {
    // productList: [],
    // housePlantsList: [],
    // succulentList: [],
    // cactusList: [],
    productById: {
        _id: "",
        productName: "",
        price: 0,
        heightPlant: 0,
        heightPot: 0,
        imageCover: "",
        imageDescription: "",
        description: "",
        category: ""
    },
    loading: false,
    hasError: false
}



export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/product/" }),
    endpoints: (builder) => ({
        getAppProducts: builder.query({
            query: () => "getAllProduct"
        })
    })
});

export const housePlantsApi = createApi({
    reducerPath: "housePlantsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/product/" }),
    endpoints: (builder) => ({
        getAppHousePlants: builder.query({
            query: () => "getHousePlants"
        })
    })
});

export const succulentPlantsApi = createApi({
    reducerPath: "succulentPlantsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/product/" }),
    endpoints: (builder) => ({
        getAppSucculentPlants: builder.query({
            query: () => "getSucculentPlants"
        })
    })
});

export const cactusPlantsApi = createApi({
    reducerPath: "cactusPlantsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5500/product/" }),
    endpoints: (builder) => ({
        getAppCactusPlants: builder.query({
            query: () => "getCactusPlants"
        })
    })
})


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
            // state.productList = action.payload;
            // state.housePlantsList = action.payload?.filter((item: PlantsProps) => item.category == "housePlant");
            // state.succulentList = action.payload?.filter((item: PlantsProps) => item.category == "succulent");
            // state.cactusList = action.payload?.filter((item: PlantsProps) => item.category == "cactus");
        },
        getProductById: (state, action) => {
            // const productId = action.payload;
            // const product = state.productList.filter((item: any) => item._id == productId)
            // state.productById = product[0];
        }
    },
});

export default productSlice.reducer;
export const { useGetAppProductsQuery, } = productsApi;
export const { useGetAppHousePlantsQuery } = housePlantsApi;
export const { useGetAppSucculentPlantsQuery } = succulentPlantsApi;
export const { useGetAppCactusPlantsQuery } = cactusPlantsApi;
export const { getAllProducts, getProductById } = productSlice.actions;