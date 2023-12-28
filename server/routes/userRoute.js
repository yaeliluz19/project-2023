const express = require("express")
const router = express.Router()
const Users = require("../models/Users");
const usersControler = require("../controler/usersControler")


router.get("/getAll",usersControler.getAllUsers)
router.get("/:id", usersControler.getUserById)
router.post("/create",usersControler.createNewUser)
router.delete("/:id",usersControler.deleteUser)
router.put("/update/:id",usersControler.updateUser)

module.exports = router

