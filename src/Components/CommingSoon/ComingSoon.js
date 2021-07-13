import React, { useContext } from 'react'
import FullPageData from '../Shared_Component/FullPageData/FullPageData';
import { FetchedDataContext } from '../Shared_Component/DataFetchingContext';

const ComingSoon = () => {
    const [FilmData, updateFilmData] = useContext(FetchedDataContext)
    return (
        <FullPageData
            sectionTitle="Coming_Soon"
            filmData={FilmData[1].items}

            // ApiUrl="https://imdb-api.com/en/API/ComingSoon/k_9nJw18H8"
            // ApiUrl="https://imdb-api.com/en/API/ComingSoon/k_tlpidvno"
            rate={null}
        />
    );
}
export default ComingSoon
