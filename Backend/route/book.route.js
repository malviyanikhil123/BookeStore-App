import express from "express"
import getBook from "../controller/book.controller.js"

// Create an instance of the Express router
const router = express.Router()

// Define a route for GET requests to the root path, which uses the getBook controller
router.get("/", getBook)

// Export the router for use in other parts of the application
export default router
