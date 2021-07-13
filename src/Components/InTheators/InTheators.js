import React, { useContext } from 'react'
import FullPageData from '../Shared_Component/FullPageData/FullPageData'
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';

const InTheaters = () => {

    // eslint-disable-next-line

    const [FilmData, updateFilmData] = useContext(FetchedDataContext)

    return (
        <FullPageData
            sectionTitle="In_Theaters"
            filmData={FilmData[0].items}

            // k_9nJw18H8"
            // k_49fw72k3"
            // k_tlpidvno"
            rate={null}
        />
    )
}



export default InTheaters;
