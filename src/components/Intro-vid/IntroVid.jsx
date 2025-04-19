import React from 'react'
const IntroVid = () => {
  return (
    <div>
      <div className='vid-container'>
        <video className='intro-vid' autoPlay loop muted>
          <source src="/assets/videos/introvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default IntroVid
