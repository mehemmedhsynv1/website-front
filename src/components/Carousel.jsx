import React from 'react';
import '../css/Carousel.css';
import { FaStar } from "react-icons/fa6";

function Carousel({ client }) {
  const { title, image, name, position } = client;
  return (
    <div>
    <div className='client-boxes-div'>
      <div className='client-stars'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <p id='client-title'>{title}</p>
      <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
        <div className='client-img-div'>
          <div className='client-img-white'>
            <img id='client-img' src={image} alt="" />
          </div>
        </div>
        <div>
          <p id='client-name'>{name}</p>
          <p id='client-position'>{position}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Carousel