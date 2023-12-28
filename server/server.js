require("dotenv").config()
const mongoose = require('mongoose')
const connectDB = require("./config/dbConn")
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const PORT = process.env.PORT || 7776
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))

app.use("/api/users", require("./routes/userRoute"))
app.use("/api/posts", require("./routes/postRoute"))
app.use("/api/todos", require("./routes/todoRoute"))
app.use("/api/photos", require("./routes/photosRoute"))

app.get("/",(req,res)=>{
res.send("home page")
})

mongoose.connection.once("open", () => {
    console.log('connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port
    ${PORT}`))
    })
    
    mongoose.connection.on('error', err => {
    console.log("error!!!!!!!!!") 
    console.log(err)
    })
  