import React from 'react'
import RatingsStars from './ChildComponent/Stars';
import { Link } from 'react-router-dom';

function Cards({ cardContent, isPage }) {
    return (
        <Link to={`/detail/${cardContent.id}`} className="flex flex-col gap-1" id="card">
            <div id="card-image" className={`rounded-xl ${isPage ? "w-full" : "w-44 sm:w-48 md:w-72"} lg:w-full h-56 sm:h-60 md:h-72 lg:h-80 xl:h-88`}>
                <img src={cardContent.image} className="rounded-xl w-full h-full " alt="something went wrong" />
            </div>
            <h3 className="font-bold sm:font-semibold tracking-wide pl-1 xl:text-lg ">{cardContent.title}</h3>
            <RatingsStars Rating={cardContent.imDbRating} size={15} />
        </Link>
    )
}

export default Cards