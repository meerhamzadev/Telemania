import React from 'react'

function InputWrapper({ Type, Name, placeHolder }) {
    return (
        <input type={Type} required className='bg-[#2b2b36] text-[#9ca3af] text-sm p-3 w-5/6 sm:w-4/6 lg:w-1/2 rounded-xl focus:border-btn-red focus:border-2 focus:outline-none ' placeholder={placeHolder} name={Name} />
    )
}

export default InputWrapper