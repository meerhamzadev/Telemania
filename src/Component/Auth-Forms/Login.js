import React from 'react'
import InputWrapper from '../ReusableWrapper/InputWrapper'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { authApp } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
    const redirect = useNavigate();
    const login = async e => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(authApp, e.target.email.value, e.target.password.value);
            redirect('/movies');
        }
        catch (e) {
            alert(e.message);
        }
    }

    return (
        <form onSubmit={login} className='flex flex-col justify-center items-center gap-2 h-screen px-2 py-5'>
            <h1 className='text-xl sm:text-2xl xl:text-3xl text-white font-bold tracking-wide' >Welcome Back</h1>
            <h4 className='text-sm text-[#55556b] font-medium tracking-wide mb-20' >Please Sign in to yor account</h4>
            <InputWrapper Type="email" Name="email" placeHolder="Email" />
            <InputWrapper Type="password" Name="password" placeHolder="Password" />
            <span className='text-[#70708b] text-xs text-right font-semibold w-5/6 sm:w-4/6 lg:w-1/2 tracking-wide' >Forget Password?</span>
            <div className='flex flex-col lg:flex-row gap-2 justify-between lg:gap-3 w-5/6 sm:w-4/6 lg:w-1/2 text-sm  mt-14'>
                <button type='submit' className='bg-btn-red text-white  p-3 font-semibold w-full xl:w-2/5 rounded-xl ' >Sign In</button>
                <button className='bg-white text-black p-3 font-semibold w-full xl:w-2/5 rounded-xl' >Sign In with Google</button>
            </div>

        </form>
    )
}

export default Login