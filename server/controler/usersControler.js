const Users = require("../models/Users")
const Task=require("../models/Users")
const getAllUsers = async (req, res) => {
    const users = await Users.find().lean()
    if (!users?.length) {
    return res.status(400).json({ message: "the users not find!!" })
    }
    res.json(users)
    }
    const createNewUser = async (req, res) => {
        //Users (name, username, email, address, phone)
        const {name, username, email, address, phone} = req.body
        if (!name || !username) 
        {
            return res.status(400).json({ message: 'name is required' })
        }
        const user = await Users.create({ name, username, email, address, phone})
        if (user) 
        {
            return res.status(201).json({ message: 'New user created' })
        }
        else 
        {
            return res.status(400).json({ message: 'Invalid user ' })
        }
    }
    
const getUserById = async (req, res) => {
    const {id} = req.params
    const user = await Users.findById(id).lean()
    if (!user) {
    return res.status(400).json({ message: "No user found" })
    }
    res.json(user)
    }

    const deleteUser = async (req, res) => {
        const { id } = req.params
        const user = await Users.findById(id)
        if (!user) {
        return res.status(400).json({ message: "User not found" })
        }
        const result = await user.deleteOne()
        const reply=`user '${result.name}' ID ${result._id} deleted`
        res.json(reply)
    }
    const updateUser = async (req, res) => {
        ////Users (name, username, email, address, phone)
        const {id}=req.params
        const {username, email,name,address,phone}= req.body
        if (!id) {
        return res.status(400).json({ message: "fields are required" })
        }
        const users = await Users.findById(id)
        if (!users) {
        return res.status(400).json({ message: "User not found" })
        }
        users.name = name
        users.username = username
        users.email = email
        users.address = address
        users.phone = phone
        const updatedUsers = await users.save()
        res.json(`"${updatedUsers.name}" updated`)

    }
    
    module.exports = {getAllUsers,createNewUser,getUserById,updateUser,deleteUser}