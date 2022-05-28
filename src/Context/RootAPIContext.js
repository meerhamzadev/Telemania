import React, { createContext, useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

export const RootAPIContext = createContext();

export function RootAPIContextWrapper(props) {

    const [loading, updateLoading] = useState(true)
    const [movieData, updateMovieData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const [inTheatersData, comingSoon, trendingMoviesData, trendingSeriesData, mostRatedMoviesData, mostRatedSeriesData] =
                    [
                        // await axios.get("https://imdb-api.com/en/API/InTheaters/k_49fw72k3"),
                        // await axios.get("https://imdb-api.com/en/API/InTheaters/k_9nJw18H8"),
                        await axios.get("https://imdb-api.com/en/API/InTheaters/k_tlpidvno"),
                        await axios.get("https://imdb-api.com/en/API/ComingSoon/k_tlpidvno"),
                        await axios.get("https://imdb-api.com/en/API/MostPopularMovies/k_tlpidvno"),
                        await axios.get("https://imdb-api.com/en/API/MostPopularTVs/k_tlpidvno"),
                        await axios.get("https://imdb-api.com/en/API/Top250Movies/k_tlpidvno"),
                        await axios.get("https://imdb-api.com/en/API/Top250TVs/k_tlpidvno")
                    ]
                updateMovieData([inTheatersData.data.items,
                comingSoon.data.items,
                trendingMoviesData.data.items,
                trendingSeriesData.data.items,
                mostRatedMoviesData.data.items,
                mostRatedSeriesData.data.items]);
                updateLoading(false);
            }
            catch (e) {
                console.log(e);
            }
        }
        return (fetchData())
    }, [])

    return (
        <>
            {
                !loading ?
                    <RootAPIContext.Provider value={[movieData, updateMovieData]} >
                        {props.children}
                    </RootAPIContext.Provider>
                    :
                    <div className='h-screen flex justify-center items-center' >
                        <ReactLoading type="bars" color="#d02f26" height='15%' width='15%' />
                    </div>

            }</>
    )
}