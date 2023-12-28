import {createSlice} from "@reduxjs/toolkit"

const initValue={
    PostsData:[]
}

const PostSlice=createSlice({
    name:"Posts",
    initialState:initValue,
    reducers:{
        get:(state,actions)=>{
            state.PostsData=actions.payload.data
        }
    }
})

export const {get}=PostSlice.actions
export default PostSlice.reducer