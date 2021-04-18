import React from 'react'
import Logo from '../assets/App-Logo.png';
import { FaGithub, FaTwitter } from "react-icons/fa";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <div className="footer__logo__image">
                    <img src={Logo} alt="something went wrong" />
                </div>
                <h1 className="footer__logo__title">
                    Tele-Mania&#174;
                </h1>
            </div>
            <div className="footer__socialMedia">
                <a href="https://github.com/MeerHamza1421" target="_blank" rel="noopener noreferrer">
                    <FaTwitter color="#1da1f2" size="2rem" />
                </a>
                <a href="https://twitter.com/MeerHamza1421" target="_blank" rel="noopener noreferrer">
                    <FaGithub color="white" size="2rem" />
                </a>
            </div>
        </footer >
    )
}

export default Footer
