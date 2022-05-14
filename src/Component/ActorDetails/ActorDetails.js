import React, { useEffect, useState } from 'react'
import MainFeed from '../MainFeed/MainFeed'
import InfoPageBar from '../ReusableWrapper/InfoPageBar'
import SectionWrapper from '../ReusableWrapper/SectionWrapper'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import ReactLoading from 'react-loading';

function ActorDetails() {
    const [actorDetail, setActorDetail] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    const params = useParams();
    useEffect(async () => {
        const data = await axios.get(`https://imdb-api.com/en/API/Name/k_9nJw18H8/${params.id}`)
        setActorDetail(data.data);
        setLoading(false);
    }, [])

    const Div = ({ detail }) => (
        <>
            <h2 className="lg:text-left text-center mt-2 font-bold text-2xl md:text-3xl">{detail.name}</h2>
            <ul className='flex gap-2 justify-center lg:justify-start text-xs sm:text-sm md:text-base lg:text-lg text-secondary-gray mt-0.5 mb-2' >
                <li className=' pr-2 sm:pr-3 lg:pr-3.5' >{detail.role}</li>
                <li className='list-disc' >{detail.height}</li>
            </ul>
            <h3 className="text-sm sm:text-base lg:text-lg text-[#c4c2c2] mb-2 md:mb-4 ">{detail.summary}</h3>
            <button onClick={() => window.history.back()} className='p-1.5 bg-btn-red my-4 sm:mt-6 md:mt-3 w-1/2 lg:w-1/4 text-center rounded hover:bg-[#ad1010]' >Back</button>
        </>
    );

    return (
        <>
            {
                // lg:grid lg:grid-cols-2 lg:grid-rows-2
                loading ? <div className='h-screen flex justify-center items-center' >
                    <ReactLoading type="bars" color="#d02f26" height='15%' width='15%' />
                </div> :
                    <SectionWrapper extraStyles="h-auto px-5 pb-5 md:ml-16 lg:ml-40 lg:mt-4 lg:flex-row lg:items-center justify-end lg:overflow-hidden gap-3 mb-10 md:mb-0" >
                        <InfoPageBar barTitle="Actor Details" />
                        <div className="mt-2 h-64 sm:h-96 w-full lg:w-1/2 flex justify-center ">
                            <img className='h-full w-5/6 md:w-full xl:w-4/5 object-fill rounded-full sm:rounded-2xl lg:rounded-full' src={actorDetail.image} alt="something went wrong" />
                        </div>
                        {
                            window.innerWidth >= 1024 ?
                                <div className='flex flex-col lg:w-1/2' >
                                    <Div detail={actorDetail} />
                                </div>
                                :
                                (
                                    <Div detail={actorDetail} />
                                )
                        }
                    </SectionWrapper>}
        </>
    )
}

export default ActorDetails










