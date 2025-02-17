import React from 'react';
import '../css/Home.css';
import HomeManImg from '../images/home-page-man.png';
import { forwardRef } from 'react';

const Home = forwardRef(({refProp}) =>  {
  return (
    <div className='home' ref={refProp}>
        <div className='home-first-div'>
            <div className='home-text'>Learning, working and <span style={{color:"#4f3dff"}}>vacationing</span></div>
            <div className='home-btn-div'>
                <button className='home-btn'>Contact us for hire</button>
            </div>
        </div>
        <div className='home-man-img'>
            <img className='home-man' src={HomeManImg} alt="" />
        </div>
    </div>
  )
})

export default Home