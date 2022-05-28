import React, { useContext } from 'react'
import SectionWrapper from '../ReusableWrapper/SectionWrapper'
import { MdAccountCircle } from 'react-icons/md';
import { AiOutlineSearch, AiFillHome, } from 'react-icons/ai';
import { BsBookmarkFill } from 'react-icons/bs';
import { BiStopwatch, BiCameraMovie } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import { SearchContext } from '../../Context/SearchContext';
import logo from '../../Assets/App-Logo.png';
import LgNav from '../LgNav/LgNav';
import './style.css';

function ParentNavWrapper({ children }) {
    const [, updateSearchItem] = useContext(SearchContext);
    const redirect = useNavigate();

    const searchHandler = e => {
        e.preventDefault();
        updateSearchItem(e.target.msearchFeild.value);
        redirect('/searched');
    }

    return (
        <SectionWrapper extraStyles="gap-8 p-5 h-auto " >
            <div className="flex justify-between items-center md:ml-14 lg:hidden  ">
                <h2 className='text-2xl font-semibold ' >Hello Meer!</h2>
                <MdAccountCircle size={40} color="white" />
            </div>
            <form onSubmit={searchHandler} className=' bg-[#2b2b36] flex p-2 gap-2 rounded-xl items-center w-11/12 self-center md:ml-14 lg:hidden ' >
                <AiOutlineSearch size={25} color="white" />
                <input name='msearchFeild' className='border-none bg-transparent text-[#d4d1d1cc] grow h-full outline-none ' placeholder='Search' type="text" />
            </form>
            <LgNav />
            {children}
            <div className='fixed bg-[#0e1011] left-0 bottom-0 md:top-0
                            flex justify-around py-3 w-full md:w-14 lg:w-44 md:mr-8
                            md:flex-col md:justify-start md:gap-10 md:items-center
                            rounded-t-2xl lg:rounded-none border-[#73747d48] border-r-[0.5px] text-[#73747D]' id='mob-nav'>
                <img src={logo} className="h-12 w-12 hidden md:flex lg:hidden contained " alt="logo" />

                <NavLink to="/movies"
                    className={({ isActive }) => `${isActive ? 'bg-btn-red text-white lg:mt-24 sideNavStyle' : 'lg:mt-24 sideNavStyle'}`}>
                    <AiFillHome size={23} color="#f3f3f3dc" />
                    <h3 className='hidden text-sm lg:block '  >Home</h3>
                </NavLink>

                <NavLink to="/intheaters"
                    className={({ isActive }) => `${isActive ? 'bg-btn-red text-white sideNavStyle' : 'sideNavStyle'}`}>
                    <BiCameraMovie size={23} color="#f3f3f3dc" />
                    <h3 className='hidden text-sm lg:block '  >In Theaters</h3>
                </NavLink>
                <NavLink to="/commingsoon"
                    className={({ isActive }) => `${isActive ? 'bg-btn-red text-white sideNavStyle' : 'sideNavStyle'}`}>
                    <BiStopwatch size={23} color="#f3f3f3dc" />
                    <h3 className='hidden text-sm lg:block ' >Coming Soon</h3>
                </NavLink>
                <NavLink to="/saved"
                    className={({ isActive }) => `${isActive ? 'bg-btn-red text-white sideNavStyle' : 'sideNavStyle'}`}>
                    <BsBookmarkFill size={23} color="#f3f3f3dc" />
                    <h3 className='hidden text-sm lg:block '  >Saved</h3>
                </NavLink>
                <NavLink to="/myaccount"
                    className={({ isActive }) => `${isActive ? 'bg-btn-red text-white sideNavStyle' : 'sideNavStyle'}`}>
                    <FaUser size={23} color="#f3f3f3dc" />
                    <h3 className='hidden text-sm lg:block '>My Account</h3>
                </NavLink>
            </div>
        </SectionWrapper>
    )
}

export default ParentNavWrapper