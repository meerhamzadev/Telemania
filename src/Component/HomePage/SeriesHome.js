import React, { useContext } from 'react'
import { RootAPIContext } from '../../Context/RootAPIContext';
import MovieCards from '../Cards/MovieCards'
import MainFeed from '../MainFeed/MainFeed'
import ImageCarousel from './ChildComponent/ImageCarousel';

function SeriesHome() {
    const [movieData] = useContext(RootAPIContext);

    return (
        <section className='mb-14 md:mb-0 flex flex-col gap-5 '>
            <ImageCarousel carousalImages={movieData[3].slice(7, 11)} />
            <MainFeed feedData={movieData[3].slice(0, 4)} feedTitle="Popular" Cards={MovieCards} pageLink="popularseries" />
            <MainFeed feedData={movieData[5].slice(0, 4)} feedTitle="Top Rated ⭐" Cards={MovieCards} pageLink="topratedseries" />
        </section>
    )
}

export default SeriesHome