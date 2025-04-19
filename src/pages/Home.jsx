import React from 'react'
import Navbar from "../components/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='vid-container'>
        <video className='intro-vid' autoPlay loop muted>
          <source src="/assets/videos/introvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Home
