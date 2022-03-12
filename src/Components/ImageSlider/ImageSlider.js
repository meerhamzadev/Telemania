import Carousel from 'nuka-carousel';
import React, { useContext } from 'react';
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';

function ImageSlider() {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext);
    return (
        <Carousel className="Slider" animation="zoom">
            {
                FilmData[1].items.slice(3, FilmData[1].items.length).map(data => {
                    return (
                        <div className="imageSlider">
                            <div className='imageSlider__image'>
                                <img src={data.image} alt="something went wrong" />
                            </div>
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

//     < InfiniteScroll
// dataLength = { items.length } //This is important field to render the next data
// next = { fetchData }
// hasMore = { true}
// loader = {< h4 > Loading...</ >}
// endMessage = {
//     < p style = {{ textAlign: 'center' }}>
//     <b>Yay! You have seen it all</b>
//     </ >
//   }
// // below props only if you need pull down functionality
// refreshFunction = { this.refresh }
// pullDownToRefresh
// pullDownToRefreshThreshold = { 50}
// pullDownToRefreshContent = {
//     < h3 style = {{ textAlign: 'center' }}>&#8595; Pull down to refresh</ >
//   }
// releaseToRefreshContent = {
//     < h3 style = {{ textAlign: 'center' }}>&#8593; Release to refresh</ >
//   }
// >
//     { items }
// </ >

