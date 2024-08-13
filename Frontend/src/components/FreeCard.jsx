import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from "axios"

function FreeCard() {

    // State to store book data fetched from the server
    const [book, setBook] = useState([])

    // Filter the data to get only the books categorized as "Free"
    const fliterData = book.filter((data) => data.category === "Free") 

    // useEffect to fetch data from the server when the component mounts
    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4001/book")
                // Set the fetched data to the state
                setBook(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getBook()
    }, [])

    // Settings for the react-slick carousel/slider
    var settings = {
        dots: true, // Show navigation dots
        infinite: false, // Don't loop infinitely
        speed: 500, // Transition speed in ms
        slidesToShow: 2, // Number of slides to show at once
        slidesToScroll: 2, // Number of slides to scroll at once
        initialSlide: 0, // Initial slide index
        responsive: [
            {
                breakpoint: 1024, // At screen width <= 1024px
                settings: {
                    slidesToShow: 3, // Show 3 slides
                    slidesToScroll: 3, // Scroll 3 slides
                    infinite: true, // Enable infinite looping
                    dots: true // Show navigation dots
                }
            },
            {
                breakpoint: 600, // At screen width <= 600px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 2, // Scroll 2 slides
                    initialSlide: 2 // Start on the 2nd slide
                }
            },
            {
                breakpoint: 480, // At screen width <= 480px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1 // Scroll 1 slide
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p className='pb-5 w-3/4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?
                        Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
                        corporis nulla non suscipit, iure neque earum?
                    </p>
                </div>
                
                {/* Carousel/Slider component for displaying filtered "Free" courses */}
                <div className="slider-container">
                    <Slider {...settings}>
                        {fliterData.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeCard
