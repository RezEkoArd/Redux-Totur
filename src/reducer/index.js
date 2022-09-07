import { combineReducers } from "redux";
import postsReducer from "./PostsReducer";
import usersReducer from "./UserReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    users: usersReducer
})


export default rootReducer
