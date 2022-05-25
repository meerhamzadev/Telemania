import React, { createContext, useState } from 'react'


export const SearchContext = createContext('');

export function SearchContextWrapper({ children }) {
    const [searchItem, updateSearchItem] = useState([])
    return (
        <SearchContext.Provider value={[searchItem, updateSearchItem]} >
            {children}
        </SearchContext.Provider>
    )
}
