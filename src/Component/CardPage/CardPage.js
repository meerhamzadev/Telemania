import React from 'react'
import MovieCards from '../Cards/MovieCards';

function CardPage({ cardsData }) {

    return (
        <section className='grid gap-3 lg:gap-4 grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:ml-20 lg:ml-44' >
            {cardsData.map(cardContent =>
                <MovieCards cardContent={cardContent} isPage />
            )}
        </section>
    )
}

export default CardPage