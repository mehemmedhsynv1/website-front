import React from 'react';
import '../css/Features.css';
import FeaturesBoxes from '../components/FeaturesBoxes';
import { boxes } from '../data/data';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../redux/slices/languageSlice';
import translations from '../locales/translation';

function Features({ refProp }) {

    const dispatch = useDispatch();
    const language = useSelector((state) => state.language.language);
    const t = translations[language];

  return (
    <div ref={refProp} className='features-main-div'>
        <div className='features-texts-div'>
            <p id='features-big-text'>{t.features_texts.features_big_text}</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>{t.features_texts.awesome_features}</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p id='choose-company'><span style={{color:"#4f3dff"}}>{t.features_texts.choose_company_purple}</span> {t.features_texts.choose_company}</p>
            <div>
                <p style={{textAlign:"center"}} id='features-grey-text'>{t.features_texts.features_grey_text}</p>
            </div>
            
        </div>
        <div className='features-boxes'>
          {
            boxes && boxes.map((box) =>(
              <FeaturesBoxes key={box.id} box={box} />
            ))
          }
        </div>
        <p id='term-conditions-text'>Conditions are applied for individual service <Link id='terms-condition'>Terms & Conditions</Link></p>
    </div>
  )
}

export default Features