import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config()

const Port = process.env.Port || 4000
const MongoDBUrl = process.env.MongoDBUrl

try {
    mongoose.connect(MongoDBUrl,{ 
        useNewurlParser:true,
        useUnifiedTopology:true 
    })
    console.log("Connected to MongoDB");

}
 catch (error) {
    console.log("Error" ,error); 
}

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`)
})