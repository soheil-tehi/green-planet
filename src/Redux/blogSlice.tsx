
import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface BlogProps {
    _id: string,
    blogTitle: string,
    viewCount: number,
    date: string,
    readTime: number,
    description: string,
    imageCover: string,
    descHtml: string,
}

interface InitialStateProps {
    blogList: [],
    blogById: BlogProps
}

const initialState: InitialStateProps = {
    blogList: [],
    blogById: {
        _id: "",
        blogTitle: "",
        viewCount: 0,
        date: "",
        readTime: 0,
        description: "",
        imageCover: "",
        descHtml: "",
    }
}

export const blogsApi = createApi({
    reducerPath: "blogsApi",
    baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_API_URL}/blog/` }),
    endpoints: (builder) => ({
        getAppBlogs: builder.query({
            query: () => "getblogs"
        })
    })
})

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {
        getAllblogs: (state, action) => {
            state.blogList = action.payload;
        },
    },
});

export default blogSlice.reducer;
export const { useGetAppBlogsQuery } = blogsApi;
export const { getAllblogs } = blogSlice.actions;


