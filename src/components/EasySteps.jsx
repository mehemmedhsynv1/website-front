import React from 'react';
import '../css/Features.css';
import EasyStepsBoxes from './EasyStepsBoxes';
import { easyStepsData } from '../data/data';

function EasySteps() {
  return (
    <div>
        <div className='features-texts-div'>
            <p id='features-big-text'>Steps</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>How it Works</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p id='choose-company'>We Have Some <span style={{color:"#4f3dff"}}>Easy Steps</span> To Process</p>
            <p style={{marginBottom:"80px", textAlign:"center"}} id='features-grey-text'>We shows only the best websites and portfolios built completely.</p>
        </div>
        <div>
          {
            easyStepsData?.map((oneData)=>(
                  <EasyStepsBoxes key={oneData.id} oneData={oneData} />
            ))
          }
        </div>
    </div>
  )
}

export default EasySteps