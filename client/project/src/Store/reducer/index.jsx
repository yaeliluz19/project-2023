import { combineReducers } from "redux";
import TodosStore from "./TodosReducer";
import PostsStore from "./PostsReducer";
import UsersStore from "./UsersReducer";

const reducers= combineReducers({
    todo:TodosStore,post:PostsStore,user:UsersStore
})

export default reducers