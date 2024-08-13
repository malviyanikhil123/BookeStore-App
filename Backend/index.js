import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

// Import route modules
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

// Create an instance of the Express application
const app = express()

// Middleware setup
app.use(cors()) // Enable CORS
app.use(express.json()) // Parse JSON request bodies

// Load environment variables from a .env file
dotenv.config()

// Set up port and MongoDB URL from environment variables
const Port = process.env.Port || 4000
const MongoDBUrl = process.env.MongoDBUrl

// Connect to MongoDB
try {
    mongoose.connect(MongoDBUrl, { 
        useNewUrlParser: true, // Correct the typo here: useNewurlParser -> useNewUrlParser
        useUnifiedTopology: true 
    })
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error", error); 
}

// Define routes for book and user endpoints
app.use("/book", bookRoute)
app.use("/user", userRoute)

// Start the server
app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`)
})
