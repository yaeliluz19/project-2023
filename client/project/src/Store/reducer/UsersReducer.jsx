import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../Slices/UserSlice"; 

const UsersStore=configureStore({
    reducer:{
        UserSlice
    }
})
export default UsersStore;