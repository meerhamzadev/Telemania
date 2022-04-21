import React from 'react'
import RatingsStars from './ChildComponent/Stars';

function Cards({ cardContent }) {
    return (
        <section className="flex flex-col gap-1" id="card">
            <div id="card-image" className="rounded-xl w-44 h-56 ">
                <img src={cardContent.image} className="rounded-xl contained w-full h-full " alt="something went wrong" />
            </div>
            <h3 className="font-bold tracking-wide pl-1 ">{cardContent.title}</h3>
            <RatingsStars Rating={cardContent.imDbRating} size={15} />
        </section>
    )
}

export default Cards