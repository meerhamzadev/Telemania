import React, { useContext } from 'react'
import FetchedDataDisplayComponent from '../Shared_Component/FetchedDataDisplayComponent';
import { WatchListContext } from './WatchListContext'
import { Link } from "react-router-dom";

const WatchList = () => {
    const [watchListData, updateWatchListData] = useContext(WatchListContext);

    return (
        <>
            {console.log(watchListData)}
            {
                watchListData.length ?
                    <section className="watchListContent">
                        <FetchedDataDisplayComponent
                            End={watchListData.length}
                            filmData={watchListData}
                            rate={null}
                        />
                    </section>
                    :
                    <section className="EmptyPage">
                        <h1>Your Watch List is Empty</h1>
                        <Link to="/" >Back</Link>
                    </section>
            }
        </>
    )
}

export default WatchList

