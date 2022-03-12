import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsBookmarkFill } from "react-icons/bs";
import logo from '../assets/App-Logo.png';
import { searchedItemContext } from '../SearchBox/SearchBoxContext';

function NavBar() {
    const [searchedItem, updateSearchedItem] = useContext(searchedItemContext)
    // const searchBar = document.getElementById("inputBar");

    return (
        <header>
            <section className="navBarLeftContent">
                <Link to="/" >
                    <img src={logo}
                        onClick={() => document.querySelector('input').value = ""}
                        alt="something went wrong" />
                </Link>
                <h2>Tele-Mania</h2>
            </section>
            <section className="navBarCenterContent">

                {/* <form onSubmit={e => { e.preventDefault(); document.querySelector('#searchIcon').click(); }} > */}

                <input id="inputBar" type="text" placeholder="Enter a series or a movie" onChange={e => {
                    updateSearchedItem(e.target.value)
                }} />
                <Link id="searchIcon" to="/searchedItems" ></Link>

                {/* </form> */}
            </section>
            <Link to="/_movieWatchList" className="navBarRightContent">
                <BsBookmarkFill size="2rem" color="white" />
            </Link>
        </header>
    )
}
document.addEventListener('keyup', e => {
    if (e.code === 'Enter') {
        e.preventDefault();
        let key = document.getElementById("searchIcon");
        key.click();
    }
})

export default NavBar;
