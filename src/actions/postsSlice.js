import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts",async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json();
    return json;
})

export const addPosts = createAsyncThunk("posts/addPost",async ({title, body, userId}) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title, body, userId
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const json = response.json()
      return json;
})

// create reducernya 
const postSlice = createSlice({
    name: "posts",
    initialState: {
        isLoading: false,
        isError: null,
        posts: []
    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.isLoading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        [getPosts.rejected]: (state,action) => {
            state.isLoading = false;
            state.isError = action.error; 
        },
        [addPosts.pending]: (state) => {
            state.isLoading = true;
        },
        [addPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
        },
        [addPosts.rejected]: (state, action) => {
            state.isLoading = false ;
            state.isError = action.error;
        }
    }
})


export default postSlice.reducer;


