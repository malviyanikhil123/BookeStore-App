import React from 'react'

function Cards({ item }) {

    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card card-side bg-base-300 shadow-xl hover:scale-105 duration-200">
                    <figure>
                        <img className='rounded-3xl'
                            src={item.image}
                            alt="Movie" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-name">{item.name}</h2>
                        <p className="card-title">{item.title}</p>
                        <div className="pc flex gap-20">
                            <div className="price border py-[2px] px-5 rounded-full mb-5 cursor-pointer">
                                $ {item.price}
                            </div>
                            <div className="categroy border py-[2px] px-5 rounded-full mb-5 cursor-pointer">
                                {item.category}
                            </div>
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Bye now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
