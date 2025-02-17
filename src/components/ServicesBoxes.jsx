import React from 'react';
import '../css/Services.css';
import { FaCheck } from "react-icons/fa";

function ServicesBoxes({ data }) {
    const { iconImg, name, title, text1, text2, text3, text4 } = data;
  return (
    <div className='services-boxes-main'>
        <div className='services-img'>{iconImg}</div>
        <p id='services-name'>{name}</p>
        <p id='services-title'>{title}</p>
        <div className='services-text-div'>
            <div className='services-texts'>
                <FaCheck />
            </div>
            <p id='services-text'>{text1}</p>
        </div>
        <div className='services-text-div'>
            <div className='services-texts'>
                <FaCheck />
            </div>
            <p id='services-text'>{text2}</p>
        </div>
        <div className='services-text-div'>
            <div className='services-texts'>
                <FaCheck />
            </div>
            <p id='services-text'>{text3}</p>
        </div>
        <div className='services-text-div'>
            <div className='services-texts'>
                <FaCheck />
            </div>
            <p id='services-text'>{text4}</p>
        </div>
    </div>
  )
}

export default ServicesBoxes