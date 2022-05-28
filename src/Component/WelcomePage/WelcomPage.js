import React from 'react'
import logo from '../../Assets/App-Logo.png'
import SectionWrapper from '../ReusableWrapper/SectionWrapper'
import welcomePic1 from '../../Assets/welcome.png';
import welcomePic2 from '../../Assets/welcome2.png';

import { Link } from 'react-router-dom';

function WelcomPage() {
    return (
        <SectionWrapper extraStyles="h-screen p-3" >
            <div className='flex gap-3 items-center ' >
                <img src={logo} className="h-12 w-12 contained" alt="logo" />
                <h4 className='font-semibold text-xl font-serif' >Telemania</h4>
            </div>
            <div className='flex flex-col md:flex-row-reverse md:grow h-3/4' >
                <div className='flex md:hidden lg:flex items-center sm:justify-center md:justify-end w-full h-full' >
                    <img src={welcomePic1} className="w-full sm:w-3/4 md:w-full h-full " alt="something went wrong" />
                </div>
                <div className='hidden md:flex lg:hidden items-center justify-end w-full h-full' >
                    <img src={welcomePic2} className="w-3/4 h-1/2 object-contain" alt="something went wrong" />
                </div>
                <div className=' flex gap-4 w-full lg:gap-3 flex-col justify-center sm:items-center md:items-start lg:pl-2' >
                    <h2 className='text-xl lg:text-2xl font-bold w-full sm:w-3/4 md:w-full lg:w-3/4' >Telemania is a leading entertainment database in xyz</h2>
                    <p className="text-[#4a4e56] text-sm sm:w-3/4 md:w-full lg:w-5/6 xl:text-base">Everyday over 4000+ users enjoying information about TV series, documenteries and feature films across a wide variey of generes and languages</p>
                    <Link to='/register' className='bg-btn-red px-1 py-1.5 lg:py-2 w-3/4 sm:w-1/2 md:w-3/4 lg:w-1/2 lg:mt-5 text-center rounded-xl self-center md:self-start' >Get Started</Link>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default WelcomPage