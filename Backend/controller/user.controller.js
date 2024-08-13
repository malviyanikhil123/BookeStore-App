import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

// Function to handle user signup
export const signup = async (req, res) => {
    try {
        // Extract user details from request body
        const { fullname, email, password } = req.body;
        
        // Check if a user with the same email already exists
        const user = await User.findOne({ email });
        if (user) {
            // If user exists, respond with status 400 and an error message
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password before storing it
        const hashPassword = await bcryptjs.hash(password, 10);
        
        // Create a new user object
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        
        // Save the new user to the database
        await createdUser.save();
        
        // Respond with status 201 and user details
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        // Log the error and respond with status 500 and an error message
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Function to handle user login
export const login = async (req, res) => {
    try {
        // Extract user credentials from request body
        const { email, password } = req.body;
        
        // Find the user by email
        const user = await User.findOne({ email });
        
        // Compare the provided password with the stored hashed password
        const isMatch = await bcryptjs.compare(password, user.password);
        
        if (!user || !isMatch) {
            // If user is not found or password does not match, respond with status 400 and an error message
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            // If login is successful, respond with status 200 and user details
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        // Log the error and respond with status 500 and an error message
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
