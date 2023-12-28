const mongoose = require('mongoose')
const postsSchema = new mongoose.Schema({

    ///Posts (title, body)
    title:{
        type:String,
        required:true,
        uppercase:true
    },
    body:{
        type:String,
        required:true,
    },
    },{
    timestamps:true
    })
module.exports = mongoose.model("Posts", postsSchema)





