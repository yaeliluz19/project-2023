import axios from "axios";

const UserUseHttpRequest= ()=>{


    const deleteUser = async(id,refetch)=>{
        console.log(id);
        try{
            await axios.delete(`http://localhost:1255/api/users/${id}`)
            refetch()
        }catch(err){
            console.error("connect delete");
        }
    }

    const createNewUser = async(data,refetch)=>{
        try{
            await axios.post('http://localhost:1255/api/users/create',data)
            refetch()
        }catch(err){
            console.error("connect failed");
        }
    }
    const updateUser = async(_id,data,refetch)=>{
        try{ 

         await axios.put(`http://localhost:1255/api/users/update/${_id}`,data)
            refetch()
        }catch(err){

            console.error("connect failed");
        }
    }

    return{createNewUser,deleteUser,updateUser}
}

export default UserUseHttpRequest

