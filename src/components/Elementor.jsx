import React from 'react';
import '../css/Elementor.css';
import ElementorBoxes from './ElementorBoxes';
import { elementorData } from '../data/data';

function Elementor() {
  return (
    <div style={{display:"flex", justifyContent:"center", padding:"100px 0"}}>
        <div className='elementor-main-div'>
        {
            elementorData?.map((oneData) =>(
                <ElementorBoxes key={oneData.id} oneData={oneData} />
            ))
        }
        </div>
    </div>
  )
}

export default Elementor