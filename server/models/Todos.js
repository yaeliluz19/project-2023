const mongoose = require('mongoose')
const TodosSchema = new mongoose.Schema({
    //Todos(title, tags, completed)
    title:{
        type:String,
        required:true,
        uppercase:true,

    },
    tags:{
        type:[String],
        required:false,
    },
    completed:{
        type:Boolean,
        required:false,
        default:false
    },
    },{
    timestamps:true
    })
module.exports = mongoose.model("Todos", TodosSchema)





