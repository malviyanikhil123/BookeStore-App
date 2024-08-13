import mongoose from "mongoose";

// Define the schema for the Book model
const BookSchema = mongoose.Schema({
    name: String,          // Name of the book
    price: Number,         // Price of the book
    category: String,      // Category of the book (e.g., Fiction, Non-Fiction)
    image: String,         // URL or path to the book's cover image
    title: String          // Title of the book
});

// Create and export the Book model based on the BookSchema
const Book = mongoose.model("Book", BookSchema);

export default Book;
