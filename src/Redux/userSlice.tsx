import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        // user: JSON.parse(localStorage.getItem("user") || "null")
        user: {},
        isLogin: false,
    },
    reducers: {
        userLogin: (state, action) => {
            console.log(28999, action.payload);

            state.isLogin = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload))
        }

    }
});

export const { userLogin } = userSlice.actions;
export default userSlice;
