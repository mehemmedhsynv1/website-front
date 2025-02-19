import React from 'react';
import AboutCompanyImg from '../images/about-company-img.png';
import '../css/AboutCompany.css';
import { FaPlay } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

function AboutCompany({ refProp }) {
  return (
    <div ref={refProp} className='about-company-main'>
        <div className='orange-cloud'></div>
        <div className='about-company-img-div'>
            <img className='about-company-img' src={AboutCompanyImg} alt="" />
        </div>
        <div className='solution-div'>
        <div style={{alignItems:"flex-start"}} className='features-texts-div'>
            <p id='features-big-text'>About</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>About our IT Company</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p style={{textAlign:"left"}} id='choose-company'>We Are The <span style={{color:"#4f3dff"}}>Best</span> IT Solution & Services</p>
            <p id='features-grey-text'>Over 39,000 people work for us in more than 70 countries all This breadth of global coverage, combined with specialist.</p>
        </div>
        <div>
            {/* <div className='services-div'>
                <div className='services-bar'>
                    <div className='services-degree-bar1'></div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p id='services-text'>UI/UX Design</p>
                    <p id='services-text'>90%</p>
                </div>
            </div> */}
            {/* <div className='services-div'>
                <div className='services-bar'>
                    <div className='services-degree-bar2'></div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p id='services-text'>SEO Marketing</p>
                    <p id='services-text'>95%</p>
                </div>
                
            </div> */}
            {/* <div className='services-div'>
                <div className='services-bar'>
                    <div className='services-degree-bar3'></div>
                </div>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <p id='services-text'>Web Development</p>
                    <p id='services-text'>70%</p>
                </div>
            </div> */}
            <div className='watch-video-div'>
                <div className='video-play-button'>
                    <FaPlay style={{color:"#fff", fontSize:"18px"}} />
                </div>
                <p id='watch-text'>watch video</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AboutCompany