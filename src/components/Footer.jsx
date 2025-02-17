import React from 'react';
import '../css/Footer.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { footerGallery } from '../data/data';
import FooterGallery from './FooterGallery';
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <footer>
        <div className='footer-main-div'>
        <div className='footer-div'>
            <p id='company-name-footer'>PoladTech</p>
            <p id='footer-grey-text'>We work with a passion of taking challenges and creating new ones in advertising sector.</p>
            <button className='footer-btn'>About us</button>
        </div>
        <div className='footer-div'>
            <div>
                <p id='footer-heading'>Newsletter</p>
                <div className='blue-line'></div>
            </div>
            <p style={{fontSize:"15px"}} id='footer-grey-text'>Subscribe our newsletter to get our latest update & news.</p>
            <div>
                <form className='footer-form'>
                    <input id='footer-input' type="email" placeholder='Your mail address' required/>
                    <button className='footer-form-btn'><FiSend /></button>
                </form>
                <div className='footer-icons'></div>
            </div>
        </div>
        <div className='footer-div'>
            <div>
                <p id='footer-heading'>Official info:</p>
                <div className='blue-line'></div>
            </div>
            <div className='contact-div'>
                <div style={{display:"flex", alignItems:"center", width:"57%"}}>
                    <FaMapMarkerAlt style={{color:"#1475f7", fontSize:"20px"}} />
                    <p style={{fontSize:"14px", marginLeft:"13px"}} id='footer-grey-text'>30 Commercial Road Fratton, Australia</p>
                </div>
                <div style={{display:"flex", alignItems:"center", width:"53%"}}>
                    <FaPhoneAlt style={{color:"#1475f7", fontSize:"14px"}}/>
                    <p style={{fontSize:"14px", marginLeft:"13px"}} id='footer-grey-text'>1-888-452-1505</p>
                </div>
                <div>
                    <p id='daily-open'>Open Hours:</p>
                    <p style={{fontSize:"14px", width:"60%"}} id='footer-grey-text'>Mon – Sat: 8 am – 5 pm, Sunday: CLOSED</p>
                </div>
            </div>
        </div>
        {/* <div className='footer-div'>
            <div>
                <p id='footer-heading'>Gallery</p>
                <div className='blue-line'></div>
            </div>
            <div className='footer-gallery-main'>
                {
                    footerGallery?.map((footerBox) =>(
                        <FooterGallery key={footerBox} footerBox={footerBox} />
                    ))
                }
            </div>
        </div> */}
        </div>
    </footer>
  )
}

export default Footer