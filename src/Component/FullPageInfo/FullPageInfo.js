import React, { useEffect, useState } from 'react'
import SectionWrapper from '../ReusableWrapper/SectionWrapper'
import Stars from '../Cards/ChildComponent/Stars';
import ActorCards from '../Cards/ActorCards';
import MainFeed from '../MainFeed/MainFeed';
import InfoPageBar from '../ReusableWrapper/InfoPageBar';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactLoading from 'react-loading';
import YoutubeTrailer from './ChildComponent/YoutubeTrailer';

function FullPageInfo() {
    const params = useParams();
    const [movieData, setMovieData] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(async () => {
        const data = await axios.get(`https://imdb-api.com/en/API/Title/k_9nJw18H8/${params.id}`);
        setMovieData(data.data);
        setLoading(false);
    }, [])

    return (
        <>
            {loading ? <div className='h-screen flex justify-center items-center' >
                <ReactLoading type="bars" color="#d02f26" height='15%' width='15%' />
            </div> :
                <SectionWrapper extraStyles="h-auto sm:h-screen xl:h-auto px-5 sm:px-7 lg:pt-4 xl:items-center md:ml-12 lg:ml-40" >
                    <InfoPageBar barTitle="Movie Details" />
                    <div className="h-2/5 md:h-1/2 xl:h-[30rem]  w-full flex justify-center " id="page-image">
                        <img className='h-full w-5/6 sm:w-11/12 md:w-full xl:w-11/12 rounded-xl' src={movieData.image} alt="something went wrong" />
                    </div>
                    <div className='flex flex-col items-center gap-0.5 sm:gap-1 lg:flex-row lg:justify-between lg:mt-3 xl:w-11/12' id='description' >
                        <h1 className='text-3xl font-bold tracking-wider' >{movieData.title}</h1>
                        <ul className='flex gap-2 text-xs sm:text-sm text-secondary-gray lg:hidden' >
                            <li className='pr-2 sm:pr-3' >{movieData.year}</li>
                            <li className='list-disc pr-2 sm:pr-3' >{movieData.directors}</li>
                            <li className='list-disc' >{movieData.runtimeStr}</li>
                        </ul>
                        <div className='mb-2.5 mt-0.5'>
                            {window.innerWidth > 1000
                                ? <Stars Rating={movieData.imDbRating} size={16} /> :
                                <Stars Rating={movieData.imDbRating} size={13} />
                            }
                        </div>
                    </div>
                    <ul className='flex gap-1.5 justify-center text-xs font-semibold sm:text-sm xl:text-base xl:mt-1' >
                        {movieData.genreList.map(
                            items => <li key={items.key} className=' p-1.5 w-16 sm:w-20 text-center font-medium bg-[#34303b] rounded xl:w-24 xl:p-1' >{items.value}</li>
                        )}
                    </ul>
                    <p className='my-2 text-secondary-gray text-xs sm:text-sm md:text-base sm:my-2.5 xl:w-11/12 xl:text-lg xl:my-3' >{movieData.plot}</p>
                    <YoutubeTrailer filmId={movieData.id} />
                    <MainFeed feedData={movieData.actorList} feedTitle="Cast" Cards={ActorCards} isFullPage />
                    <button className='p-1.5 bg-btn-red my-4 sm:mt-6 md:mt-3 w-1/2 self-center rounded lg:hidden' >Watch Trailer</button>
                </SectionWrapper>
            }
        </>
    )
}

export default FullPageInfo