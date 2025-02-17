import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";

function Header({ scrollToSection, homeRef, featuresRef, aboutCompanyRef, servicesRef, clientsReviewRef }) {
  return (
    <header className='header'>
        <div className='company-name-div'>
            <p id='company-name'>PoladTech</p>
        </div>
        <div className='header-r-div'>
            <div className='navbar-links'>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(homeRef)} className='link'>Home</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(featuresRef)} className='link'>Features</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(aboutCompanyRef)} className='link'>About Us</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(servicesRef)} className='link'>Our Services</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(clientsReviewRef)} className='link'>Testimonials</button>
                    <div className='header-underline'></div>
                </div>
            </div>
            <div className='header-icons-div'>
                <div className='social-icons-div'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaInstagram />
                </div>
                <div className='basket-div'>
                    <span className='line-span'></span>
                    <BsBasket />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header