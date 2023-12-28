const express = require("express")
const router = express.Router()
const Todos = require("../models/Todos");
const todosControler = require("../controler/todosControler")


router.get("/getAll",todosControler.getAllTodos)
router.get("/:id", todosControler.getTodoById)
router.post("/create",todosControler.createNewTodo)
router.delete("/:id",todosControler.deleteTodo)
router.put("/updateTodo/:id",todosControler.updateTodo)
router.put("/updatedoCompleted/:id",todosControler.updateTodoCompleted)


module.exports = router

