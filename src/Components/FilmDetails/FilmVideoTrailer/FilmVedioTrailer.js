import React, { useState, useEffect } from 'react'
import axios from "axios";
import BeatLoader from "react-spinners/BeatLoader";
import ReactPlayer from 'react-player';

function FilmVedioTrailer({ filmId }) {
    const [urlState, setUrlState] = useState(false);
    const [videoUrl, updateVideoUrl] = useState("");

    useEffect(() => {
        // k_9nJw18H8
        // k_49fw72k3
        // axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/k_9nJw18H8/${filmId}`)
        axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/k_49fw72k3/${filmId}`)
        // axios.get(`https://imdb-api.com/en/API/YouTubeTrailer/k_tlpidvno/${filmId}`)
            .then(response => {
                updateVideoUrl(response.data.videoUrl);
                setUrlState(true);
            })
    }, [filmId])

    return (
        <>
            {
                urlState ?
                    <div className="videoTrailer" >
                        <ReactPlayer url={videoUrl} controls height='25rem' width='56.25rem' />
                    </div>
                    :
                    <BeatLoader
                        size={50}
                        color={"#ce2222"}
                        loading={!urlState}
                    />

            }
        </>
    )
}

export default FilmVedioTrailer;
