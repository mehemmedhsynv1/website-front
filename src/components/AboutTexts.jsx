import React from 'react'

function AboutTexts({ aboutText }) {
    const { about_text, id } = aboutText;
  return (
    <div className='about-texts-main'>
        <div className='about-nums'>{id}</div>
        <p id='about-titles'>{about_text}</p>
    </div>
  )
}

export default AboutTexts