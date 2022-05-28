import React, { useContext } from 'react'
import logo from '../../Assets/App-Logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchContext } from '../../Context/SearchContext';
import { useNavigate, NavLink } from 'react-router-dom';
function LgNav() {
    const [, updateSearchItem] = useContext(SearchContext);
    const redirect = useNavigate();
    const searchHandler = e => {
        e.preventDefault();
        updateSearchItem(e.target.searchFeild.value);
        redirect('/searched');
    }
    return (
        <section className='hidden w-full justify-between items-center gap-3 lg:flex z-[3]' >
            <div className='gap-3 items-center flex fixed top-0 my-5' >
                <img src={logo} className="h-8 w-8 " alt="logo" />
                <h4 className='font-semibold text-lg font-serif hidden lg:block ' >Telemania</h4>
            </div>
            <ul className='flex gap-6 grow pl-5 ml-40 ' >
                <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-[#73747D]"}`} to='/movies'>Movies</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-[#73747D]"}`} to='/series' >TV Series</NavLink>
                <NavLink className={({ isActive }) => `${isActive ? "text-white" : "text-[#73747D]"}`} to='/anime' >Animes</NavLink>
            </ul>
            <form onSubmit={searchHandler}
                className='flex items-center border-[#73747d8f] border-[0.5px] rounded-2xl py-1 px-1.5' >
                <AiOutlineSearch size={25} color="#73747d8f" />
                <input className='w-full border-none outline-none bg-transparent ml-1' type="text" name='searchFeild' placeholder="Search" />
            </form>
        </section>
    )
}

export default LgNav