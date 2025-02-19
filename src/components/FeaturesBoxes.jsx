import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../css/Features.css';

function FeaturesBoxes({ box }) {

  const [show, setShow] = useState(false);

  const changeShow = () =>{
    setShow(!show);
  }

  const { name, image, title } = box;
  return (

    <>
      {
        show ? (
        <div onMouseLeave={changeShow} style={{backgroundColor:"#4f3dff", transform:"rotateY(180deg)"}} className='features-boxes-main2'>
        <div className='boxes-img-div'>{image}</div>
        <p className='boxes-name'>{name}</p>
        <p className='boxes-title'>{title}</p>
        <div style={{marginTop:'130px'}} className='right-arrow-div'><MdOutlineKeyboardArrowRight /></div>
        <div className='first-round'>
            <div style={{backgroundColor:'#017df0'}} className='second-round'>
                <div style={{backgroundColor:"#4f3dff"}} className='third-round'></div>
            </div>
        </div>
    </div> 
        ) : (
        <div onMouseEnter={changeShow} className='features-boxes-main'>
        <div className='boxes-img-div'>{image}</div>
        <p className='boxes-name'>{name}</p>
        <div className='right-arrow-div'><MdOutlineKeyboardArrowRight /></div>
        <div className='first-round'>
            <div className='second-round'>
                <div className='third-round'></div>
            </div>
        </div>
    </div>
        )
      }
    </>

     






    

  )
}

export default FeaturesBoxes