import React from 'react'

function ActorCards({ cardContent }) {
    return (
        <section className="flex flex-col gap-0.5 items-center" id="card">
            <div id="card-image" className="w-28 h-20 flex justify-center">
                <img src={cardContent.image} className=" text-center rounded-full contained w-20 h-full " alt="something went wrong" />
            </div>
            <h3 className="font-semibold text-base tracking-wide leading-none">{cardContent.name}</h3>
            <h4 className="font-light text-[#98979e] text-xs text-center">{cardContent.asCharacter}</h4>
        </section>
    )
}

export default ActorCards