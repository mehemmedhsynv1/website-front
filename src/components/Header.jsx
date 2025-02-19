import React from 'react';
import '../css/Header.css';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/slices/languageSlice';
import translations from '../locales/translation';

function Header({ scrollToSection, homeRef, featuresRef, aboutCompanyRef, servicesRef, clientsReviewRef }) {


    // const hamburgerMenu = document.querySelector(".hamburger-menu");
    const leftSlideDiv = document.querySelector(".left-slide-div");
    const showSlideDiv = () =>{
        leftSlideDiv.style.visibility = "visible";
    }


    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const t = translations[language];

  return (
    <header className='header'>
        <div className='company-name-div'>
            <p id='company-name'>PoladTech</p>
        </div>
        <div className='header-r-div'>
            <div className='navbar-links'>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(homeRef)} className='link'>{t.navbar_buttons.Home}</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(featuresRef)} className='link'>{t.navbar_buttons.Features}</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(aboutCompanyRef)} className='link'>{t.navbar_buttons.About_Us}</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(servicesRef)} className='link'>{t.navbar_buttons.Our_Services}</button>
                    <div className='header-underline'></div>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(clientsReviewRef)} className='link'>{t.navbar_buttons.Testimonials}</button>
                    <div className='header-underline'></div>
                </div>
            </div>
            <div>
                <div onClick={showSlideDiv} className='hamburger-menu'>
                   <GiHamburgerMenu />
                </div>
            <div className='left-slide-div'>
                <div className='company-name-div'>
                    <p style={{marginLeft:'80px', marginBottom:"20px"}} id='company-name'></p>
                </div>
            <div className='link-div'>
                    <button onClick={() => scrollToSection(homeRef)} className='link-slide'>Home</button>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(featuresRef)} className='link-slide'>Features</button>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(aboutCompanyRef)} className='link-slide'>About Us</button>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(servicesRef)} className='link-slide'>Our Services</button>
                </div>
                <div className='link-div'>
                    <button onClick={() => scrollToSection(clientsReviewRef)} className='link-slide'>Testimonials</button>
                </div>
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
                <div className='language-btn-div'>
                    <button onClick={() => dispatch(setLanguage("en"))}>EN</button>
                    <button onClick={() => dispatch(setLanguage("az"))}>AZ</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header