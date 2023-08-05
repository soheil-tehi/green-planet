import { createSlice } from "@reduxjs/toolkit";

interface PlantsProps {
    count: number,
    _id: string,
    productName: string,
    price: number,
    heightPlant: number,
    heightPot: number,
    imageCover: string,
    imageDescription: string,
    description: string,
}

interface InitialStateProps {
    cartItems: PlantsProps[]
}

const initialState: InitialStateProps = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const findItem = state.cartItems.find(item => item._id == action.payload._id);
            if (findItem) {
                const updateCartItems = state.cartItems.filter(item => {
                    if (item._id == action.payload._id) {
                        return item.count = item.count + 1
                    }
                    return item;
                })
                state.cartItems = updateCartItems;
            } else {
                state.cartItems.push({ count: 1, ...action.payload })
            }
        },
        removeFromCart: (state, action) => {
            const cartItemsData = state.cartItems.filter(item => item._id !== action.payload);
            state.cartItems = cartItemsData;
        },
        addCount: (state, action) => {
            const updateCartItems = state.cartItems.filter(item => {
                if (item._id == action.payload) {
                    return item.count = item.count + 1
                }
                return item;
            })
            state.cartItems = updateCartItems;
        },
        minusCount: (state, action) => {
            const updateCartItems = state.cartItems.filter(item => {
                if (item._id == action.payload) {
                    return item.count = item.count - 1
                }
                return item;
            })
            state.cartItems = updateCartItems;
        }
    }
});

export default cartSlice.reducer;

export const { addToCart, removeFromCart, addCount, minusCount } = cartSlice.actions;