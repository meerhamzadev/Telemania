import React, { useState, createContext } from 'react'

export const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchListData, updateWatchListData] = useState([]);
    return (
        <WatchListContext.Provider value={[watchListData, updateWatchListData]}>
            {props.children}
        </WatchListContext.Provider>
    )
}

