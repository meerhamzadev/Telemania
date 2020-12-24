import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { searchedItemContext } from './SearchBoxContext';
import FetchedDataDisplayComponent from '../Shared_Component/FetchedDataDisplayComponent';
import BeatLoader from "react-spinners/BeatLoader";

const SearchBox = () => {
    const [searchedItem, updateSearchedItem] = useContext(searchedItemContext)
    const [searchedData, updateSearchedData] = useState([])
    const [initialState, updateInitialState] = useState(false)
    useEffect(() => {
        searchedData !== null ?
            // axios.get(`https://imdb-api.com/en/API/Search/k_tlpidvno/${searchedItem}`)
            axios.get(`https://imdb-api.com/en/API/Search/k_49fw72k3/${searchedItem}`)
                .then(response => {
                    updateSearchedData(response.data.results)
                    updateInitialState(true)
                }
                )
            :
            <></>

    }, [searchedItem])

    return (
        <>
            {searchedData !== null ?
                <section className="watchListContent">
                    <FetchedDataDisplayComponent
                        End={searchedData.length}
                        filmData={searchedData}
                        searched={true}
                    />
                </section>
                :
                <section className='Loading'>
                    <BeatLoader
                        size={70}
                        color={"#ce2222"}
                        loading={!initialState}
                    />
                </section>
            }
        </>
    )
}

export default SearchBox;