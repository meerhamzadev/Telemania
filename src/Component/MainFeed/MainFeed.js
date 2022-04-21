import React from 'react'
import './MainFeed.css';

function MainFeed({ feedData, feedTitle, isFullPage, Cards }) {
    return (
        <section className='flex flex-col gap-3' >
            <div className='flex justify-between items-center' >
                <h2 className="font-bold text-xl">{feedTitle}</h2>
                {!isFullPage ?
                    <a href="#" className='text-sm text-[#6a718f] font-semibold ' >See more</a>
                    : <></>}
            </div>
            <div className='flex gap-3 w-full overflow-x-scroll' id="scroll-feed" >
                {feedData.map(cardContent => <Cards cardContent={cardContent} />)}
            </div>
        </section>
    )
}

export default MainFeed
