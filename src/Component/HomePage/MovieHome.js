import React, { useContext } from 'react'
import { RootAPIContext } from '../../Context/RootAPIContext';
import MovieCards from '../Cards/MovieCards'
import MainFeed from '../MainFeed/MainFeed'
import ImageCarousel from './ChildComponent/ImageCarousel';

function MovieHome() {
    const [movieData] = useContext(RootAPIContext);

    return (
        <section className='mb-14 md:mb-0 flex flex-col gap-5 '>
            <ImageCarousel carousalImages={movieData[2].slice(9, 13)} />
            <MainFeed feedData={movieData[2].slice(0, 4)} feedTitle="Popular" Cards={MovieCards} pageLink="popularmovies" />
            <MainFeed feedData={movieData[4].slice(0, 4)} feedTitle="Top Rated ⭐" Cards={MovieCards} pageLink="topratedmovies" />
        </section>
    )
}

export default MovieHome