import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from "../Slices/TodoSlice";
import PostSlice from '../Slices/PostSlice';
import UserSlice from '../Slices/UserSlice';
export const mystore= configureStore({
    reducer:
    {
        TodoSlice,PostSlice,UserSlice
    }
});
