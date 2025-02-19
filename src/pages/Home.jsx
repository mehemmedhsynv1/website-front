import React from 'react';
import '../css/Home.css';
import HomeManImg from '../images/home-page-man.png';
import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/slices/languageSlice';
import translations from '../locales/translation';

const Home = forwardRef(({refProp}) =>  {

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const t = translations[language];

  return (
    <div className='home' ref={refProp}>
        <div className='home-first-div'>
            <div className='home-text'>{t.home_texts.home_text} <span style={{color:"#4f3dff"}}>{t.home_texts.home_purple}</span></div>
            <div className='home-btn-div'>
                <button className='home-btn'>{t.home_texts.home_button}</button>
            </div>
        </div>
        <div className='home-man-img'>
            <img className='home-man' src={HomeManImg} alt="" />
        </div>
    </div>
  )
})

export default Home