import React, { useContext } from 'react'
import FullPageData from '../Shared_Component/FullPageData/FullPageData';
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';

const Top250Series = () => {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext)
    return (

        <FullPageData
            sectionTitle="Most_Rated_Series"
            filmData={FilmData[5].items}
        />
    )
}

export default Top250Series
