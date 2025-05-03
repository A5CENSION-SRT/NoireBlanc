import React from 'react'
import './IntroVid.css'
const IntroVid = () => {
  return (
    <div>
      <div className='vid-container'>
        <video className='intro-vid' autoplay loop autoPlay muted>
          <source src="/videos/introvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='overlay'>
        <div className="overlay-text">power.</div>
        <div className="overlay-text">precision.</div>
        <div className="overlay-text">prestige.</div>
        </div>
      </div>
    </div>
  )
}

export default IntroVid
