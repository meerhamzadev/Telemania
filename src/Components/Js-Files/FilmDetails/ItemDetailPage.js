import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import BeatLoader from "react-spinners/BeatLoader";
import RatingsStars from '../Shared_Component/FetchDataDisplayChild/RatingsStars';
import FilmVedioTrailer from './FilmVedioTrailer';
import ActorList from './ActorList';

const ItemDetailPage = ({ match }, props) => {
    const [movieDetail, updateMovieDetail] = useState({})
    const [dataLoadingState, updateDataLoadingState] = useState(false)

    useEffect(() => {
        axios
            // .get(`https://imdb-api.com/en/API/Title/k_9nJw18H8/${match.params.id}`)
            .get(`https://imdb-api.com/en/API/Title/k_49fw72k3/${match.params.id}`)
            // .get(`https://imdb-api.com/en/API/Title/k_tlpidvno/${match.params.id}`)
            .then(response => {
                console.log(response);
                updateMovieDetail(response.data);
                updateDataLoadingState(true)
            })
    }, [])

    return (
        <>
            {
                dataLoadingState ?

                    <section className="filmDetailsPage">

                        <div className="filmImage" >
                            <img src={movieDetail.image} alt="something went wrong" />
                        </div>

                        <div className="FilmDetails" >
                            <h1>{movieDetail.fullTitle}</h1>
                            <h2>Release Date: <span>{movieDetail.releaseDate}</span></h2>
                        </div>

                        <div className="filmDescription" >
                            <h2>Genres: <span>{movieDetail.genres}</span></h2>
                            <RatingsStars Rating={movieDetail.imDbRating} />
                            <h3>{movieDetail.plot}</h3>
                        </div>

                        <FilmVedioTrailer filmId={match.params.id} />

                        <div className="filmDirectorWriter">
                            <h2>Director: <span>{movieDetail.directors ? movieDetail.directors : "Not Provided"}</span></h2>
                            <h2>Writer: <span>{movieDetail.writers ? movieDetail.writers : "Not Provided"}</span></h2>
                        </div>

                        <div className="filmActors">
                            <h2>Cast</h2>

                            <div className="filmActorsDetails" >
                                <ActorList actorsList={movieDetail.actorList} />

                            </div>

                        </div>
                        <Link to="/" className="backToHomeButton" onClick={() => document.querySelector('input').value = ''} > Back to Home </Link>

                    </section>

                    :

                    <section className='Loading'>
                        <BeatLoader
                            size={70}
                            color={"#ce2222"}
                            loading={!dataLoadingState}
                        />
                    </section>
            }
        </>
    )
}

export default ItemDetailPage
