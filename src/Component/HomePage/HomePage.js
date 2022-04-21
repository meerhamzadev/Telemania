import React from 'react'
import MovieCards from '../Cards/MovieCards'
import MainFeed from '../MainFeed/MainFeed'

function HomePage() {
    const data = [
        {
            title: "The Lord of the Rings",
            image: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,3,128,176_AL_.jpg",
            imDbRating: "9.2"
        },
        {
            title: "The Shawshank Redemption",
            image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX128_CR0,3,128,176_AL_.jpg",
            imDbRating: "9.2"
        },
        {
            title: "The Godfather II",
            image: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
            imDbRating: "4.2"
        },
    ]
    const sdata = [
        {
            title: "The Godfather",
            image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX128_CR0,1,128,176_AL_.jpg",
            imDbRating: "9.2"
        },
        {
            title: "12 Angry Men",
            image: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX128_CR0,3,128,176_AL_.jpg",
            imDbRating: "4.2"
        },
        {
            title: "Schindler's List",
            image: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX128_CR0,3,128,176_AL_.jpg",
            imDbRating: "9.2"
        },
    ]
    return (
        <>
            <MainFeed feedData={data} feedTitle="Popular" Cards={MovieCards} />
            <MainFeed feedData={sdata} feedTitle="Top Rated ⭐" Cards={MovieCards} />
        </>
    )
}

export default HomePage