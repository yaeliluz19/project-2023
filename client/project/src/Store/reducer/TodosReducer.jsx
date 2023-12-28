import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../../Slices/TodoSlice";

const TodosStore=configureStore({
    reducer:{
        todosSlice
    }
})
export default TodosStore;