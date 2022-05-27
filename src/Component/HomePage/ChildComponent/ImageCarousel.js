import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


function ImageCarousel() {
    const images = [
        { url: "https://imdb-api.com/images/original/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_Ratio0.6751_AL_.jpg", },
        { url: "https://imdb-api.com/images/original/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_Ratio0.6751_AL_.jpg", },
        { url: "https://imdb-api.com/images/original/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_Ratio0.6751_AL_.jpg", },
        { url: "https://imdb-api.com/images/original/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_Ratio0.6751_AL_.jpg", },
        { url: "https://imdb-api.com/images/original/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_Ratio0.6751_AL_.jpg", },
        { url: "https://imdb-api.com/images/original/MV5BZGQ1NjQyNDMtNzFlZS00ZGIzLTliMWUtNGJkMGMzNTBjNDg0XkEyXkFqcGdeQXVyMTE1NDI5MDQx._V1_Ratio0.6751_AL_.jpg", },
    ];
    let width = '80vw';
    return (
        <section className='hidden justify-center md:ml-16 lg:ml-40 xl:ml-44 md:flex' >
            <SimpleImageSlider
                width={width}
                height={450}
                images={images}
                showBullets={false}
                autoPlay={true}
                showNavs={true}
            />
        </section>
    )
}

export default ImageCarousel