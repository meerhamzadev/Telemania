import React, { useContext } from 'react'
import FullPageData from '../Shared_Component/FullPageData/FullPageData';
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';

const MostPopularMovies = () => {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext)

    return (

        <FullPageData
            sectionTitle="Trending_Movies"
            filmData={FilmData[2].items}
        />
    );
}

export default MostPopularMovies
