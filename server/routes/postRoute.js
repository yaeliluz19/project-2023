const express = require("express")
const router = express.Router()
const postsControler = require("../controler/postsControler")


router.get("/getAll",postsControler.getAllPosts)
router.get("/:id", postsControler.getPostById)
router.post("/create",postsControler.createNewPost)
router.delete("/:id",postsControler.deletePost)
router.put("/updatePost/:id",postsControler.updatePost)

module.exports = router

