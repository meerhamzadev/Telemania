import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


function ImageCarousel({ carousalImages }) {
    const images = [
        { url: carousalImages[0].image, },
        { url: carousalImages[1].image, },
        { url: carousalImages[2]?.image, },
        { url: carousalImages[3]?.image },
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