import React from 'react'
import { Link } from 'react-router-dom';
const ActorList = ({ actorsList }) => {

    return (
        <>
            {
                actorsList.map(actor => (
                    <Link className="filmActorsSection" to={`/Actor/${actor.id}`} >
                        <section className="actorDetails">
                            <img src={actor.image} alt="Image Not Found" />
                            <h3>{actor.name}</h3>
                        </section>
                    </Link>
                ))
            }
        </>
    )
}

export default ActorList
