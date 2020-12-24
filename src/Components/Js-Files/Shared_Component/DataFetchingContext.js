import React, { createContext, useState, useEffect } from 'react';
import BeatLoader from "react-spinners/BeatLoader";

export const FetchedDataContext = createContext();

export function DataFetchingContextProvider(props) {

    const [state, updateState] = useState(false)
    const [data, updateData] = useState([])

    useEffect(async () => {
        // let inTheatersData = await fetch(`https://imdb-api.com/en/API/InTheaters/k_9nJw18H8`)
        let inTheatersData = await fetch(`https://imdb-api.com/en/API/InTheaters/k_49fw72k3`)
            // let inTheatersData = await fetch(`https://imdb-api.com/en/API/InTheaters/k_tlpidvno`)
            .then(response => response.json())

        // let comingSoon = await fetch(`https://imdb-api.com/en/API/ComingSoon/k_9nJw18H8`)
        let comingSoon = await fetch(`https://imdb-api.com/en/API/ComingSoon/k_49fw72k3`)
            // let comingSoon = await fetch(`https://imdb-api.com/en/API/ComingSoon/k_tlpidvno`)
            .then(response => response.json())

        // let trendingMoviesData = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_9nJw18H8")
        let trendingMoviesData = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_49fw72k3")
            // let trendingMoviesData = await fetch("https://imdb-api.com/en/API/MostPopularMovies/k_tlpidvno")
            .then(response => response.json())

        // let trendingSeriesData = await fetch("https://imdb-api.com/en/API/MostPopularTVs/k_9nJw18H8")
        let trendingSeriesData = await fetch("https://imdb-api.com/en/API/MostPopularTVs/k_49fw72k3")
            // let trendingSeriesData = await fetch("https://imdb-api.com/en/API/MostPopularTVs/k_tlpidvno")
            .then(response => response.json())

        // let mostRatedMoviesData = await fetch("https://imdb-api.com/en/API/Top250Movies/k_9nJw18H8")
        let mostRatedMoviesData = await fetch("https://imdb-api.com/en/API/Top250Movies/k_49fw72k3")
            // let mostRatedMoviesData = await fetch("https://imdb-api.com/en/API/Top250Movies/k_tlpidvno")
            .then(response => response.json())

        // let mostRatedSeriesData = await fetch("https://imdb-api.com/en/API/Top250TVs/k_9nJw18H8")
        let mostRatedSeriesData = await fetch("https://imdb-api.com/en/API/Top250TVs/k_49fw72k3")
            // let mostRatedSeriesData = await fetch("https://imdb-api.com/en/API/Top250TVs/k_tlpidvno")
            .then(response => response.json())

        updateData(await Promise.all([
            inTheatersData,
            comingSoon,
            trendingMoviesData,
            trendingSeriesData,
            mostRatedMoviesData,
            mostRatedSeriesData
        ]));

        updateState(true);

    }, [])

    return (
        <>
            {
                state ?
                    <FetchedDataContext.Provider value={[data, updateData]} >
                        {props.children}
                    </FetchedDataContext.Provider>
                    :

                    <section className='Loading'>
                        <BeatLoader
                            size={70}
                            color={"#ce2222"}
                            loading={!state}
                        />
                    </section>

            }</>
    )
}
