import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WatchListContext } from '../WatchList/WatchListContext';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import RatingsStars from './FetchDataDisplayChild/RatingsStars';

let watchListArray = [];


const FetchedDataDisplayComponent = props => {

    const [watchListData, updateWatchListData] = useContext(WatchListContext);

    let addToWatchList = (e, movieData) => {
        e.preventDefault();
        watchListArray.push(movieData);
        updateWatchListData(watchListArray);
    }

    let removeFromWatchList = (e, movieData) => {
        e.preventDefault();
        watchListArray.splice(watchListArray.indexOf(movieData), 1);
        updateWatchListData(watchListArray);
        let removeButton = document.getElementById(movieData.id);
        removeButton.innerHTML = "Add to WatchList";
        removeButton.classList.remove('removeFromWatchListButton');
        removeButton.classList.add('WatchList');
    }


    return (
        <>
            {
                props.filmData.slice(0, props.End).map(dataOfApi => (

                    <Link key={dataOfApi.id}
                        to={`/${dataOfApi.id}`}
                        className="filmCardLink"
                    >
                        <section className="filmCard">

                            <div className="filmImage" >
                                <img src={dataOfApi.image} alt="something went wrong" />
                            </div>

                            <div className="filmCardDescription">
                                {dataOfApi.title.length >= 23 ? <h1 style={{ fontSize: '1.187rem' }} >{dataOfApi.title}</h1> : <h1>{dataOfApi.title}</h1>}

                                {
                                    props.rate === null

                                        ? dataOfApi.genres === undefined ? <div className="tab_phoneButton">
                                            <RatingsStars Rating={dataOfApi.imDbRating} />
                                            <AiOutlineMinus onClick={e => { removeFromWatchList(e, dataOfApi) }}
                                                className="dotMenu"
                                                color="white" size="1.6rem" />
                                        </div> : dataOfApi.genres.split(',').length >= 4

                                                ? <div className="tab_phoneButton">
                                                    <h3>Genres:    <span style={{ fontSize: '0.94rem' }} >{dataOfApi.genres}</span></h3>
                                                    {
                                                        window.location.href.slice(window.location.href.indexOf('_') + 1, window.location.href.length) !== 'movieWatchList' ?
                                                            <AiOutlinePlus onClick={e => { addToWatchList(e, dataOfApi) }}
                                                                className="dotMenu"
                                                                color="white" size="1.6rem" />
                                                            :
                                                            <AiOutlineMinus onClick={e => { removeFromWatchList(e, dataOfApi) }}
                                                                className="dotMenu"
                                                                color="white" size="1.6rem" />

                                                    }
                                                </div>

                                                : <div className="tab_phoneButton">
                                                    <h3>Genres:    <span>{dataOfApi.genres}</span></h3>
                                                    {
                                                        window.location.href.slice(window.location.href.indexOf('_') + 1, window.location.href.length) !== 'movieWatchList' ?
                                                            <AiOutlinePlus onClick={e => { addToWatchList(e, dataOfApi) }}
                                                                className="dotMenu"
                                                                color="white" size="1.6rem" />
                                                            :
                                                            <AiOutlineMinus onClick={e => { removeFromWatchList(e, dataOfApi) }}
                                                                className="dotMenu"
                                                                color="white" size="1.6rem" />

                                                    }
                                                </div>
                                        :
                                        <div className="tab_phoneButton">
                                            {

                                                dataOfApi.imDbRating ?

                                                    <RatingsStars Rating={dataOfApi.imDbRating} addToWatchList={addToWatchList} dataOfApi={dataOfApi} />

                                                    : <> </>

                                            }

                                            <AiOutlinePlus onClick={e => { addToWatchList(e, dataOfApi) }}
                                                className="dotMenu"
                                                color="white" size="1.6rem" />
                                        </div>
                                }

                                <div className="filmCardsActionButtons">

                                    <Link className="Details" to={`/${dataOfApi.id}`}>
                                        View Details
                                        </Link>

                                    {
                                        window.location.href.slice(window.location.href.indexOf('_') + 1, window.location.href.length) === 'movieWatchList' ?

                                            <button
                                                onClick={e => { removeFromWatchList(e, dataOfApi) }}
                                                className="removeFromWatchListButton"
                                                id={dataOfApi.id}>
                                                Remove from WatchList
                                                </button>
                                            :

                                            <button
                                                onClick={e => { addToWatchList(e, dataOfApi) }}
                                                className="WatchList">
                                                Add to WatchList
                                                </button>
                                    }
                                </div>

                            </div>

                        </section>

                    </Link>
                )
                )
            }
        </>
    );
}
export default FetchedDataDisplayComponent
