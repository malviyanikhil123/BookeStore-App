import express from "express"
import { signup, login } from "../controller/user.controller.js"

// Create an instance of the Express router
const router = express.Router()

// Define a route for POST requests to "/signup" that uses the signup controller
router.post("/signup", signup)

// Define a route for POST requests to "/login" that uses the login controller
router.post("/login", login)

// Export the router for use in other parts of the application
export default router
