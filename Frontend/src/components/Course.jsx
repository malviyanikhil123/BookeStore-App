import React from 'react'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'
import Cards from './Cards'

function Course() {
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                    <div className='mt-28 items-center justify-center text-center'>
                        <h1 className="text-2xl font-semibold md:text-4xl">
                            We're delighted to have you{""}
                            <span className="text-pink-500">Here! :)</span>
                        </h1>
                        <p className='mt-12'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi nesciunt itaque veritatis, doloribus atque corrupti nihil quo consectetur cum a soluta, ullam numquam quia consequuntur ut. Nihil amet magni sed? Omnis aspernatur officia commodi consectetur, velit optio sint provident dolorem voluptatum tempore, eligendi ratione eos explicabo dolorum minima saepe.
                        </p>
                        <Link to="/">
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-8">Back</button>
                        </Link>
                    </div>
                    <div className="mt-12 grid grid-cols-4 md:grid-cols-2">
                        {
                            list.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
