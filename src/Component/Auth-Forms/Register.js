import React from 'react'
import InputWrapper from '../ReusableWrapper/InputWrapper'

function Register() {
    return (
        <form className='flex flex-col justify-center items-center gap-2 h-screen px-2 py-5'>
            <h1 className='text-xl sm:text-2xl xl:text-3xl text-white font-bold tracking-wide ' >Create new account</h1>
            <h4 className='text-sm text-[#55556b] font-medium tracking-wide mb-20' >Please fill in the form to continue</h4>
            <InputWrapper Type="text" Name="fullname" placeHolder="Full Name" />
            <InputWrapper Type="email" Name="email" placeHolder="Email" />
            <InputWrapper Type="password" Name="password" placeHolder="Password" />
            <InputWrapper Type="password" Name="cpassword" placeHolder="Confirm Password" />
            <div className='flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-3 w-5/6 sm:w-4/6 lg:w-1/2 text-sm mt-14 mb-3'>
                <button className='bg-btn-red text-white p-3 font-semibold w-full xl:w-2/5 rounded-xl ' >Register</button>
                <button className='bg-white text-black p-3 font-semibold w-full xl:w-2/5 rounded-xl' >Register with Google</button>
            </div>
            <h4 className="text-white text-xs xl:text-sm font-medium xl:w-1/2  tracking-wide mb-5">Already had an Account? <span className='text-btn-red' >Sign in</span></h4>
        </form>
    )
}

export default Register