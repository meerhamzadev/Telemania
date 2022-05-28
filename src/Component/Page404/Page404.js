import React from 'react'
import { Link } from 'react-router-dom'

function Page404() {
    return (
        <section className='flex flex-col justify-center items-center gap-8 h-[70vh] text-white md:pl-36  lg:pl-40 ' >
            <div className='text-center' >
                <h1 className='text-7xl lg:text-8xl font-black'>404</h1>
                <h3 className='text-sm lg:text-base ' ><span className='font-bold mr-2' >⚠ Error:</span>This page is not available at this moment 🙇‍♂️</h3>
            </div>
            <Link to="/movies" className='bg-btn-red p-1.5 w-1/2 lg:w-1/5 text-center rounded-xl' >Go Back</Link>
        </section>
    )
}

export default Page404