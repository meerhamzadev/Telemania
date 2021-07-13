import React, { useContext } from 'react'
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';
import Carousel from 'nuka-carousel';

function ImageSlider() {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext)
    return (
        <Carousel className="Slider">
            {
                FilmData[1].items.slice(3, FilmData[1].items.length).map(data => {
                    return (
                        <div className="imageSlider">
                            <img src={data.image} alt="something went wrong" />
                        </div>
                    )
                })
            }

        </Carousel>
    )
}

export default ImageSlider
