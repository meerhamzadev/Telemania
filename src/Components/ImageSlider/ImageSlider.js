import Carousel from 'nuka-carousel';
import React, {useContext} from 'react';
import {FetchedDataContext} from '../Shared_Component/DataFetchingContext';

function ImageSlider() {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext)
    return (
        <Carousel className="Slider">
            {
                FilmData[1].items.slice(3, FilmData[1].items.length).map(data => {
                    console.log(data);
                    
                    return (
                        <div className="imageSlider">
                            <img src={data.image} alt="something went wrong" />
                            <div className="imageSlider__info">
                                <p className="imageSlider__info__title">{data.title}</p>
                                <p className="imageSlider__info__year">Release Year: <span>{data.year}</span></p>
                                <p className="imageSlider__info__runtime">Runtime: <span>{data.runtimeStr}</span></p>
                                <p className="imageSlider__info__stars">Stars: <span>{data.stars}</span></p>
                                <p className="imageSlider__info__genre">Genre: <span>{data.genres}</span></p>
                                <p className="imageSlider__info__plot">Plot: <span>{data.plot}</span></p>
                            </div>
                        </div>
                    )
                })
            }

        </Carousel>
    )
}

export default ImageSlider
