import React from 'react'

function AboutTexts({ aboutText }) {
    const { title, id } = aboutText;
  return (
    <div className='about-texts-main'>
        <div className='about-nums'>{id}</div>
        <p id='about-titles'>{title}</p>
    </div>
  )
}

export default AboutTexts