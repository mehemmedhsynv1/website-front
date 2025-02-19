import React from 'react';
import '../css/About.css';
import '../css/EasySteps.css';
import { FaArrowRightLong } from "react-icons/fa6";

function EasyStepsBoxes({ oneData }) {
    const { id, name, title, iconImg, image, buttonText } = oneData;
  return (
    <div>
        {
        id == 2 ? 
        (
    <div className='easy-step-boxes2'>
        <div className='reverse-div'>
            <p id='easy-s-name'>{name}</p>
            <p id='easy-s-title'>{title}</p>
            <div className='our-services-btn'>
                <p id='our-services-text'>{buttonText}</p>
            </div>
        </div>
        <div style={{display:"flex", flexDirection:"column", position:"relative"}}>
            <div className='top-line'></div>
            <div style={{transform:"rotate(180deg)"}} className='easy-steps-arrow'>
                <FaArrowRightLong />
            </div>
            <div className='bottom-line'></div>
        </div>
        <div className='easy-step-img-div' style={{display:"flex", alignItems:"center"}}>
            <img className='easy-step-img' src={image} alt="" />
            <div className='easy-s-icon-div'>
                <img src={iconImg} alt="" />
            </div>
        </div>
    </div>
          )  : (
            
            <div className='easy-step-boxes'>
                <div className='easy-name-title'>
                    <p id='easy-s-name'>{name}</p>
                    <p id='easy-s-title'>{title}</p>
                    <div className='our-services-btn'>
                        <p id='our-services-text'>{buttonText}</p>
                    </div>
                </div>
                <div className='easy-steps-arrow'>
                    <FaArrowRightLong />
                </div>
                <div className='easy-step-img-div' style={{display:"flex", alignItems:"center"}}>
                    <img className='easy-step-img' src={image} alt="" />
                    <div className='easy-s-icon-div'>
                        <img src={iconImg} alt="" />
                    </div>
                </div>
            </div>
          ) 
    }
    </div>
  )
}

export default EasyStepsBoxes