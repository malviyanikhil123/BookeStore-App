import React from 'react';

// The Cards component displays individual item details in a card format.
function Cards({ item }) {

    return (
        <>
            {/* Outer container for spacing */}
            <div className="mt-4 my-3 p-3">
                {/* Card container with hover effect */}
                <div className="card card-side bg-base-300 shadow-xl hover:scale-105 duration-200">
                    
                    {/* Figure element containing the item image */}
                    <figure>
                        <img className='rounded-3xl'
                            src={item.image}
                            alt="Movie" />
                    </figure>
                    
                    {/* Card body with item details */}
                    <div className="card-body">
                        
                        {/* Displaying item name */}
                        <h2 className="card-name">{item.name}</h2>
                        
                        {/* Displaying item title */}
                        <p className="card-title">{item.title}</p>
                        
                        {/* Price and category section with flex layout */}
                        <div className="pc flex gap-20">
                            <div className="price border py-[2px] px-5 rounded-full mb-5 cursor-pointer">
                                $ {item.price}
                            </div>
                            <div className="category border py-[2px] px-5 rounded-full mb-5 cursor-pointer">
                                {item.category}
                            </div>
                        </div>
                        
                        {/* Action button */}
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;
