import React from 'react';
import { aboutTexts } from '../data/data';
import AboutTexts from '../components/AboutTexts';
import '../css/About.css';
import AboutImg from '../images/about-img.png';

function About() {
  return (
    <div className='about-section'>
      <div style={{width:"40%"}}>
        <div style={{alignItems:"flex-start"}} className='features-texts-div'>
            <p id='features-big-text'>About</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>Why You choose our company?</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p style={{textAlign:"left"}} id='choose-company'>We Team of <span style={{color:"#4f3dff"}}>Experience</span> It Specialities</p>
            <p id='features-grey-text'>By optimizing your body’s innate capacity to heal, many chronic diseases can be mitigated.</p>
        </div>
        <div className='about-div'>
                {
                    aboutTexts?.map((aboutText)=>(
                        <AboutTexts key={aboutText.id} aboutText={aboutText} />
                    ))
                }
                <div className='our-services-btn'>
                    <p id='our-services-text'>Our Services +</p>
                </div>
        </div>
        </div>
        <div className='about-img-div'>
            <img id='about-img' src={AboutImg} alt="" />
        </div>
    </div>
  )
}

export default About