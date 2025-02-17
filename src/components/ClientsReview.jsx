import React, { useState } from 'react';
import '../css/Client.css';
import Carousel from './Carousel';
import { clientsReview } from '../data/data';
import { IoIosArrowBack } from "react-icons/io";

function ClientsReview({ refProp }) {
  const [id, setId] = useState(1);

  const incrementId = () =>{
    if(id < 3){
      setId(id + 1);
    }

  } 
  const decrementId = () =>{
    if(id > 1){
      setId(id - 1);
    }
  }

  return (
    <div ref={refProp} className='client-main-div'>
        <div className='client-round-div'>
            <div className='client-small-round1'></div>
            <div className='client-small-round2'></div>
            <div className='client-small-round3'></div>
            <div className='client-round'></div>
        </div>
        <div>
        <div style={{alignItems:"flex-start", position:"relative", left:"-6em", paddingBottom:"30px"}} className='features-texts-div'>
            <p id='features-big-text'>Reviews</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>Client’s Testimonials</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p style={{width:"65%", textAlign:"start"}} id='choose-company'>Our Awesome <span style={{color:"#4f3dff"}}>Clients Review</span> For Inspiration.</p>
            <p style={{width:"65%", margin:'0'}} id='features-grey-text'>We’ve been lucky to collaborate with a long list of customers, located in and out of the country. Thanks to them we have grown as professionals.</p>
        </div>
        <div>
          {
            clientsReview?.map((client) =>{
              if(client.id == id){
                return <Carousel key={client.id} client={client} />
              }
            })
          }
          <div style={{position:"relative", right:"300px", top:"350px"}}>
        <div onClick={decrementId} className='scroll-btn'>
          <div className='scroll-arrow-div'>
            <IoIosArrowBack />
          </div>
        </div>
        <div onClick={incrementId} style={{right:"50px", transform:"rotate(180deg)"}} className='scroll-btn'>
          <div className='scroll-arrow-div'>
            <IoIosArrowBack />
          </div>
        </div>
      </div>
        </div>
    </div>
    </div>
  )
}

export default ClientsReview