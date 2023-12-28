import {createSlice} from "@reduxjs/toolkit"

const initValue={
    UsersData:[]
}

const UserSlice=createSlice({
    name:"Users",
    initialState:initValue,
    reducers:{
        get:(state,actions)=>{
            state.UsersData=actions.payload.data
        }
    }
})

export const {get}=UserSlice.actions
export default UserSlice.reducer