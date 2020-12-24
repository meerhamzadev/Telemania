import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsBookmarkFill } from "react-icons/bs";
import logo from '../assets/App-Logo.png';
import { searchedItemContext } from '../SearchBox/SearchBoxContext';

function NavBar() {
    const [searchedItem, updateSearchedItem] = useContext(searchedItemContext)

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

                <form>

                    <input type="text" placeholder="Enter a series or a movie" onChange={e => {
                        updateSearchedItem(e.target.value)
                    }} />
                    <Link to="/searchedItems" ></Link>

                </form>
            </section>
            <Link to="/_movieWatchList" className="navBarRightContent">
                <BsBookmarkFill size="2rem" color="white" />
            </Link>
        </header>
    )
}

export default NavBar;
