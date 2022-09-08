import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./actions/postsSlice";


export default configureStore({
    reducer: {
        posts: postReducer
    }
})