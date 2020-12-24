import React from 'react'
import ComingSoon from '../CommingSoon/ComingSoon'
import InTheaters from '../InTheators/InTheators'
import MostPopularMovies from '../Popular/MostPopularMovies'
import MostPopularSeries from '../Popular/MostPopularSeries'
import Top250Movies from '../Top250/Top250Movies'
import Top250Series from '../Top250/Top250Series'


const HomePage = () => (
    <>
        <InTheaters />
        <ComingSoon />
        <MostPopularMovies />
        <MostPopularSeries />
        <Top250Movies />
        <Top250Series />
    </>
)


export default HomePage
