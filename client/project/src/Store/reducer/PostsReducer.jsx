import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "../../Slices/PostSlice";

const PostsStore=configureStore({
    reducer:{
        PostSlice
    }
})
export default PostsStore;