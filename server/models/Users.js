const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({

    //Users (name, username, email, address, phone)
    name:{
        type:String,
        required:true,
        uppercase:true,
    },
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        
    },
    address:{
        type:String,
        
    },
    phone:{
        type:mongoose.Schema.Types.String,
        
    },
    },{
    timestamps:true
    })
module.exports = mongoose.model("Users", usersSchema)



