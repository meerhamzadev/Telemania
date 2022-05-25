import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../Context/SearchContext';
import axios from 'axios';
import ReactLoading from 'react-loading';
import CardPage from '../CardPage/CardPage';

const SearchData = () => {
    const [searchedItem] = useContext(SearchContext)
    const [searchedData, updateSearchedData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            // axios.get(`https://imdb-api.com/en/API/Search/k_tlpidvno/${searchedItem}`)
            const data = await axios.get(`https://imdb-api.com/en/API/Search/k_49fw72k3/${searchedItem}`);
            console.log(data.data.results);
            updateSearchedData(data.data.results)
            setLoading(false)
        }
        return (fetchData())
    }, [])

    return (
        <>
            {!loading ?
                <CardPage cardsData={searchedData} />
                :
                <div className='h-screen flex justify-center items-center' >
                    <ReactLoading type="bars" color="#d02f26" height='15%' width='15%' />
                </div>
            }
        </>
    )
}

export default SearchData;