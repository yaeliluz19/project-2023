import axios from "axios";

const TodoUseHttpRequest= ()=>{

// router.post("/create", todosController.createNewTodo)

    const deleteTodo = async(id,refetch)=>{
        console.log(id);
        try{
            await axios.delete(`http://localhost:1255/api/todos/${id}`)
            refetch()
        }catch(err){
            console.error("connect delete");
        }
    }

    const updateTodoComplete = async(id)=>{
        try{
            await axios.put(`http://localhost:1255/api/todos/updatedoCompleted/${id}`)
        }catch(err){
            console.error("connect failed");
        }
    }

    const createTodo = async(data,refetch)=>{
        try{
            await axios.post('http://localhost:1255/api/todos/create',data)
            refetch()
        }catch(err){
            console.error("connect failed");
        }
    }
    const updateTodo = async(_id,data,refetch)=>{
        try{
         await axios.put(`http://localhost:1255/api/todos/updateTodo/${_id}`,data)
            refetch()
        }catch(err){
            console.error("connect failed");
        }
    }

    return{ updateTodoComplete,createTodo,deleteTodo,updateTodo }
}

export default TodoUseHttpRequest

