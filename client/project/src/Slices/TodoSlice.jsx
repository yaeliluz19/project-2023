import {createSlice} from "@reduxjs/toolkit"

const initValue={
    TodosData:[]
}

const TodoSlice=createSlice({
    name:"Todos",
    initialState:initValue,
    reducers:{
        get:(state,actions)=>{
            state.TodosData=actions.payload.data
        }
    }
})

export const {get}=TodoSlice.actions
export default TodoSlice.reducer