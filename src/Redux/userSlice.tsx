import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        isLogin: false,
    },
    reducers: {
        userLogin: (state, action) => {
            state.isLogin = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload))
        }

    }
});

export const { userLogin } = userSlice.actions;
export default userSlice;
