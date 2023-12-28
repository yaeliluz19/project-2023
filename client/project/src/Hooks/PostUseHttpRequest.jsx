
import axios from "axios";

const PostUseHttpRequest= ()=>{


    const deletePost = async(id,refetch)=>{
        console.log(id);
        try{
            await axios.delete(`http://localhost:1255/api/posts/${id}`)
            refetch()
        }catch(err){
            console.error("connect delete");
        }
    }

    const createPost = async(data,refetch)=>{
        try{
            await axios.post('http://localhost:1255/api/posts/create',data)
            refetch()
        }catch(err){
            console.error("connect failed");
        }
    }
    const updatePost = async(_id,data,refetch)=>{
        try{ 
         await axios.put(`http://localhost:1255/api/posts/updatePost/${_id}`,data)
            refetch()
        }catch(err){
            console.error("connect failed");
        }
    }

    return{createPost,deletePost,updatePost}
}

export default PostUseHttpRequest

