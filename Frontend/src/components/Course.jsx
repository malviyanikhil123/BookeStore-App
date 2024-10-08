import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import axios from "axios";

// The Course component fetches and displays a list of books, filtered by category.
function Course() {

    // State to store the fetched book data
    const [book, setBook] = useState([]);

    // Filter the book data to include only items with the "Paid" category
    const filterData = book.filter((data) => data.category === "Paid");

    // useEffect to fetch the book data when the component mounts
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book");
                console.log(res.data);
                setBook(res.data); // Update the book state with fetched data
            } catch (error) {
                console.log(error); // Log any errors during the data fetch
            }
        };
        getBook();
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    return (
        <>
            {/* Main container for layout */}
            <div className="mt-4 my-3 p-3">
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    
                    {/* Header section with welcome message */}
                    <div className='mt-28 items-center justify-center text-center'>
                        <h1 className="text-2xl font-semibold md:text-4xl">
                            We're delighted to have you{""}
                            <span className="text-pink-500">Here! :)</span>
                        </h1>
                        <p className='mt-12'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi nesciunt itaque veritatis, doloribus atque corrupti nihil quo consectetur cum a soluta, ullam numquam quia consequuntur ut. Nihil amet magni sed? Omnis aspernatur officia commodi consectetur, velit optio sint provident dolorem voluptatum tempore, eligendi ratione eos explicabo dolorum minima saepe.
                        </p>
                        {/* Link back to the homepage */}
                        <Link to="/">
                            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-8">Back</button>
                        </Link>
                    </div>
                    
                    {/* Grid layout for displaying filtered book data */}
                    <div className="mt-12 grid grid-cols-4 md:grid-cols-2">
                        {
                            filterData.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Course;
