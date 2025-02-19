import React from 'react';
import { aboutTexts } from '../data/data';
import AboutTexts from '../components/AboutTexts';
import '../css/About.css';
import AboutImg from '../images/about-img.png';
import { useDispatch, useSelector } from 'react-redux';
import translations from '../locales/translation';

function About() {

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const t = translations[language];

  return (
    <div className='about-section'>
      <div className='about-texts-div'>
        <div style={{alignItems:"flex-start"}} className='features-texts-div'>
            <p id='features-big-text'>{t.about_heading_texts.about_big_text}</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>{t.about_heading_texts.awesome_features}</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p style={{textAlign:"left"}} id='choose-company'> <span style={{color:"#4f3dff"}}>{t.about_heading_texts.choose_company_purple}</span> {t.about_heading_texts.choose_company}</p>
            <p id='features-grey-text'>{t.about_heading_texts.features_grey_text}</p>
        </div>
        <div className='about-div'>
                {
                    t.about_texts?.map((aboutText)=>(
                        <AboutTexts key={aboutText.id} aboutText={aboutText} />
                    ))
                }
                <div className='our-services-btn'>
                    <p id='our-services-text'>{t.our_services_button} +</p>
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