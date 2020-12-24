import React, { useContext } from 'react'
import FullPageData from '../Shared_Component/FullPageData';
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';

const MostPopularSeries = () => {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext)

    return (
        <FullPageData
            sectionTitle="Trending_Series"
            filmData={FilmData[3].items}
        />

    );

}
export default MostPopularSeries
