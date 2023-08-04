import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface InitialStateProps {
    productList: [],
    loading: boolean,
    hasError: boolean,
}

const initialState: InitialStateProps = {
    productList: [],
    loading: false,
    hasError: false
}

export const getAllProducts = createAsyncThunk(
    "products/getAllProducts",
    async () => {
        const res = await axios.get("http://localhost:5500/product/getAllProduct")
            .then(res => res.data)

        return res;
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllProducts.fulfilled, (state: InitialStateProps, action: any) => {
            state.loading = false;
            state.productList = action.payload;
        });
        builder.addCase(getAllProducts.rejected, (state: InitialStateProps) => {
            state.loading = false;
            state.hasError = true;
        });
    }
});

export default productSlice.reducer;