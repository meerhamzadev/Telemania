import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import ReactLoading from 'react-loading';
import axios from 'axios';

function YoutubeTrailer({ filmId }) {
    const [vidData, setVidData] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(async () => {
        const data = await axios.get(`https://imdb-api.com/en/API/YoutubeTrailer/k_9nJw18H8/${filmId}`);
        setVidData(data.data);
        setLoading(false)
    }, [])

    return (
        <>
            {loading ?
                <div className='h-[25rem] w-[56.2rem]' >
                    <ReactLoading type="bars" color="#d02f26" height='20%' width='20%' />
                </div> :
                <div id="player" className="my-7 hidden w-full justify-center lg:flex xl:w-11/12">
                    <ReactPlayer controls height='25rem' width='56.25rem' url={`${vidData.videoUrl}`} />
                </div>
            }
        </>
    )
}

export default YoutubeTrailer