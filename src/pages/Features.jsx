import React from 'react';
import '../css/Features.css';
import FeaturesBoxes from '../components/FeaturesBoxes';
import { boxes } from '../data/data';
import { Link } from 'react-router-dom';

function Features({ refProp }) {
  return (
    <div ref={refProp} className='features-main-div'>
        <div className='features-texts-div'>
            <p id='features-big-text'>Features</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>Awesome features</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p id='choose-company'>Choose <span style={{color:"#4f3dff"}}>The Best</span> IT Service Company</p>
            <p id='features-grey-text'>An IT firm or MSP who keeps your IT running smoothly.</p>
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