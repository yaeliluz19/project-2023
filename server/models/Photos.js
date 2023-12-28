const mongoose = require('mongoose')
const PhotosSchema = new mongoose.Schema({
   //Photos (title, imageUrl)
    title:{
        type:String,
        required:true,
        uppercase:true,
    },
    imageUrl:{
        type:String,
        required:false,
    },
    },{
    timestamps:true
    })
module.exports = mongoose.model("Photos", PhotosSchema)





