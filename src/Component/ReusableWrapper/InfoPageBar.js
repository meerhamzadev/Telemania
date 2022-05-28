import React from 'react'
import { IoIosArrowBack } from 'react-icons/io';
import { FaRegBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function InfoPageBar({ barTitle }) {
    return (
        <div className="py-3 flex items-center justify-between lg:hidden" id="top-bar">
            <Link to="/movies"><IoIosArrowBack color='white' size={20} /></Link>
            <h2 className='font-serif' >{barTitle}</h2>
            <FaRegBookmark color='white' size={20} />
        </div>
    )
}

export default InfoPageBar