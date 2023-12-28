const Posts = require("../models/Posts");
//const Task=require("../models/Users")
const getAllPosts = async (req, res) => {
    const posts = await Posts.find().lean()
    if (!posts?.length) {
    return res.status(400).json({ message: "the posts not find!!" })
    }
    res.json(posts)
    }
    const createNewPost = async (req, res) => {
        const {title,body} = req.body
        if (!title || !body) 
        {
            return res.status(400).json({ message: 'title or body are required' })
        }
        const post = await Posts.create({title,body })
        if (post) 
        {
            return res.status(201).json({ message: 'New post created' })
        }
        else 
        {
            return res.status(400).json({ message: 'Invalid post ' })
        }
    }
    
const getPostById = async (req, res) => {
    const {id} = req.params
    const post = await Posts.findById(id).lean()
    if (!post) {
    return res.status(400).json({ message: "No post found" })
    }
    res.json(post)
    }

    const deletePost = async (req, res) => {
        const { id } = req.params
        const post = await Posts.findById(id)
        if (!post) {
        return res.status(400).json({ message: "post not found" })
        }
        const result = await post.deleteOne()
        const reply=`post '${result.title}' ID ${result._id} deleted`
        res.json(reply)
    }
    const updatePost = async (req, res) => {
        const {id}=req.params
        const {body,title}= req.body
        if (!id) {
        return res.status(400).json({ message: "fields are required" })
        }
        const posts = await Posts.findById(id)
        if (!posts) {
        return res.status(400).json({ message: "Post not found" })
        }
        posts.title=title 
        posts.body = body
        const updatedPosts = await posts.save()
        res.json(`"${updatedPosts.title}" updated`)

    }
    
    module.exports = {getAllPosts,createNewPost,getPostById,updatePost,deletePost}