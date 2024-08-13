import mongoose from "mongoose";

// Define the schema for the User model
const UserSchema = mongoose.Schema({
    fullname: {
        type: String,       // Full name of the user
        require: true       // This field is required
    },
    email: {
        type: String,       // Email address of the user
        require: true,      // This field is required
        unique: true        // Email must be unique across users
    },
    password: {
        type: String,       // Password for the user
        require: true       // This field is required
    }
});

// Create and export the User model based on the UserSchema
const User = mongoose.model("SignupData", UserSchema);

export default User;
