const Todos = require("../models/Todos")
const getAllTodos = async (req, res) => {
    const todos = await Todos.find().lean()
    if (!todos?.length) {
    return res.status(400).json({ message: "the todos not find!!" })
    }
    res.json(todos)
    }
    const createNewTodo = async (req, res) => {
        //title, tags, completed
        const {title, tags, completed} = req.body
        if (!title ) 
        {
            return res.status(400).json({ message: 'title is required' })
        }
        const todo = await Todos.create({ title, tags, completed})
        if (todo) 
        {
            return res.status(201).json({ message: 'New todo created' })
        }
        else 
        {
            return res.status(400).json({ message: 'Invalid todo ' })
        }
    }
    
const getTodoById = async (req, res) => {
    const {id} = req.params
    const todo = await Todos.findById(id).lean()
    if (!todo) {
    return res.status(400).json({ message: "No todo found" })
    }
    res.json(todo)
    }

    const deleteTodo = async (req, res) => {
        const { id } = req.params
        const todo = await Todos.findById(id)
        if (!todo) {
        return res.status(400).json({ message: "Todo not found" })
        }
        const result = await todo.deleteOne()
        const reply=`todo '${result.title}' ID ${result._id} deleted`
        res.json(reply)
    }
    const updateTodo = async (req, res) => {
        const { id}=req.params
        const {title,tags}= req.body
      
        if (!id || !title ) {
        return res.status(400).json({ message: "fields are required" })
        }
        const todos = await Todos.findById(id)
        if (!todos) {
        return res.status(400).json({ message: "Todo not found" })
        }
        todos.title =title
        todos.tags =tags
        const updateTodos = await todos.save()
        res.json(`"${updateTodos.title}" updated`)

    }
    
    const updateTodoCompleted = async (req, res) => {
        const { id } = req.params
        const todo = await Todos.findById(id)
        if (!todo)
        {
            return res.status(400).json({ message: 'todo not found' })
        }
        todo.completed = !todo.completed
        const updatedTodo = await todo.save()
        res.json(`'${updatedTodo.title}' updated`)
        }
    
    
    module.exports = {getAllTodos,createNewTodo,getTodoById,updateTodo,deleteTodo,updateTodoCompleted}