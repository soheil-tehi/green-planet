import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface PlantsProps {
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
    productList: [],
    housePlantsList: [],
    succulentList: [],
    cactusList: [],
    productById: PlantsProps,
    loading: boolean,
    hasError: boolean,
}

const initialState: InitialStateProps = {
    productList: [],
    housePlantsList: [],
    succulentList: [],
    cactusList: [],
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
})
// export const getAllProducts = createAsyncThunk(
//     "products/getAllProducts",
//     async () => {
//         const res = await axios.get("http://localhost:5500/product/getAllProduct")
//             .then(res => res.data)

//         return res;
//     }
// );

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getAllProducts: (state, action) => {
            console.log("🙏", action.payload);

            state.productList = action.payload;
            state.housePlantsList = action.payload?.filter((item: PlantsProps) => item.category == "housePlant");
            state.succulentList = action.payload?.filter((item: PlantsProps) => item.category == "succulent");
            state.cactusList = action.payload?.filter((item: PlantsProps) => item.category == "cactus");
        },
        getProductById: (state, action) => {
            const productId = action.payload;
            const product = state.productList.filter((item: any) => item._id == productId)
            state.productById = product[0];
        }
    },


    // extraReducers: (builder) => {
    //     builder.addCase(getAllProducts.pending, (state) => {
    //         state.loading = true;
    //     });
    //     builder.addCase(getAllProducts.fulfilled, (state: InitialStateProps, action: any) => {
    //         state.loading = false;
    //         state.productList = action.payload;
    //     });
    //     builder.addCase(getAllProducts.rejected, (state: InitialStateProps) => {
    //         state.loading = false;
    //         state.hasError = true;
    //     });
    // }
});

export default productSlice.reducer;
export const { useGetAppProductsQuery } = productsApi;

export const { getAllProducts, getProductById } = productSlice.actions;