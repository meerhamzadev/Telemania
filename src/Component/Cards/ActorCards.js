import React from 'react'
import { Link } from 'react-router-dom'

function ActorCards({ cardContent }) {
    return (
        <Link to={`/actor/${cardContent.id}`} className="flex flex-col gap-0.5 items-center md:gap-0" id="card">
            <div id="card-image" className="w-28 h-20 sm:w-32 md:w-36 sm:h-28 md:h-32 lg:h-36 lg:w-42 flex justify-center">
                <img src={cardContent.image} className=" text-center rounded-full contained w-20 sm:w-28 md:w-32 lg:w-36 h-full " alt="something went wrong" />
            </div>
            <h3 className="font-semibold text-base tracking-wide leading-none xl:text-lg ">{cardContent.name}</h3>
            <h4 className="font-light text-secondary-gray text-xs text-center">{cardContent.asCharacter.slice(0, (cardContent.asCharacter.length / 2))}</h4>
        </Link>
    )
}

export default ActorCards