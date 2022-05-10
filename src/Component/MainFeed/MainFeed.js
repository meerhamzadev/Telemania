import React from 'react'
import './MainFeed.css';

function MainFeed({ feedData, feedTitle, isFullPage, Cards }) {
    return (
        <section className={`flex flex-col gap-3 md:gap-2 md:ml-14 lg:pl-32 ${isFullPage && "xl:w-11/12 md:ml-0 lg:pl-0"}`} >
            <div className='flex justify-between items-center' >
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{feedTitle}</h2>
                {!isFullPage ?
                    <a href="#" className='text-sm text-[#6a718f] font-semibold xl:text-base' >See more</a>
                    : <></>}
            </div>
            <div className={`flex gap-3 w-full overflow-x-scroll lg:gap-4 ${isFullPage ? 'lg:overflow-x-hidden lg:flex-wrap ' : 'lg:grid lg:grid-cols-3 xl:grid-cols-4'}`} id="scroll-feed" >
                {feedData.map(cardContent => <Cards cardContent={cardContent} />)}
            </div>
        </section>
    )
}

export default MainFeed
