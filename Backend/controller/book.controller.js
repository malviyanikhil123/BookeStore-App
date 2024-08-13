import Book from "../model/book.Schema.js"

// Function to get all books from the database
const getBook = async (req, res) => {
    try {
        // Fetch all books from the database
        const book = await Book.find()
        // Respond with status 200 and the list of books in JSON format
        res.status(200).json(book)
    } catch (error) {
        // Log the error for debugging purposes
        console.log("error: ", error)
        // Respond with status 500 and the error in JSON format
        res.status(500).json(error)
    }
}

export default getBook
