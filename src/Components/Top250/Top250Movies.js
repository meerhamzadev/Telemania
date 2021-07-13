import React, { useContext } from 'react'
import FullPageData from '../Shared_Component/FullPageData/FullPageData';
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';

const Top250Movies = () => {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext)
    return (
        <FullPageData
            sectionTitle="Most_Rated_Movies"
            filmData={FilmData[4].items}
        />

    );
}

export default Top250Movies
