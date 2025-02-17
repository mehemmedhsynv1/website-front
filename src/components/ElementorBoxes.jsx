import React from 'react';
import '../css/Elementor.css';

function ElementorBoxes({ oneData }) {
    const { image, number, suffix, title } = oneData;
  return (
    <div className='elementor-boxes-div'>
        <div style={{display:"flex", alignItems:"center"}}>
            <div className='elementor-icon'>{image}</div>
            <p className='elementor-numbers'>{number}{suffix}</p>
        </div>
        <p id='elementor-texts'>{title}</p>
    </div>
  )
}

export default ElementorBoxes