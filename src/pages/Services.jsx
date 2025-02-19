import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { servicesData } from '../data/data';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import '../css/Services.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ServicesBoxes from '../components/ServicesBoxes';

const Services = ({ refProp }) => {
  return (
    <div style={{backgroundColor:"rgba(0, 0, 0, 0.01)", paddingTop:"70px"}}>
    <div ref={refProp} className='features-texts-div'>
            <p id='features-big-text'>Services</p>
            <div className='awesome-features-div'>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
                <p id='awesome-features'>Awesome Services</p>
                <p style={{fontSize:"55px", color:"#4f3dff"}}>.</p>
            </div>
            <p id='choose-company'>Our Awesome <span style={{color:"#4f3dff"}}>Services</span> To Give You Success.</p>
            <p style={{marginBottom:"20px", textAlign:"center"}} id='features-grey-text'>Our team have designed game changing products, consulted for companies as well.</p>
        </div>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            breakpoints={{
                300: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1150: {
                    slidesPerView: 3,
                }
            }}
        >   
        <div>
            
            {
                servicesData?.map((data) => (
                    <SwiperSlide>
                        <ServicesBoxes key={data.id} data={data} />
                    </SwiperSlide>
                ))
            }
        </div>
    </Swiper>
    </div>
  );
};
export default Services
