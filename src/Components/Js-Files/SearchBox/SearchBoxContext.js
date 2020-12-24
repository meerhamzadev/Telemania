import React, { useState, createContext } from 'react';

export const searchedItemContext = createContext();

export const SearchBoxContext = (props) => {
    const [searchedItem, updateSearchedItem] = useState(null)
    return (
        <searchedItemContext.Provider value={[searchedItem, updateSearchedItem]} >
            {props.children}
        </searchedItemContext.Provider>
    )
}

