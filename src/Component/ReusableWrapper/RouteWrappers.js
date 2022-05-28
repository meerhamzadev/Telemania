import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { RootAPIContext } from '../../Context/RootAPIContext';
import Page404 from '../Page404/Page404';
import CardPage from "../CardPage/CardPage";
import MovieHome from '../HomePage/MovieHome';

function RouteWrappers() {
    const [movieData] = useContext(RootAPIContext);

    return (
        <Routes>
            <Route index element={<MovieHome />} />
            <Route path='intheaters' element={<CardPage cardsData={movieData[0]} />} />
            <Route path='commingsoon' element={<CardPage cardsData={movieData[1]} />} />
            <Route path='popularmovies' element={<CardPage cardsData={movieData[2]} />} />
            <Route path='popularseries' element={<CardPage cardsData={movieData[3]} />} />
            <Route path='topratedmovies' element={<CardPage cardsData={movieData[4]} />} />
            <Route path='topratedseries' element={<CardPage cardsData={movieData[5]} />} />
            <Route path='saved' element={<Page404 />} />
            <Route path='myaccount' element={<Page404 />} />
        </Routes>
    )
}

export default RouteWrappers