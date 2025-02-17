import React from 'react';
import '../css/Footer.css';

function FooterGallery({ footerBox }) {
  return (
    <div className='footer-img-div'>
        <img id='footer-gallery-img' src={footerBox.image} alt="" />
    </div>
  )
}

export default FooterGallery