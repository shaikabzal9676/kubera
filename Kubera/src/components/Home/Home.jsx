import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect'
import Fade from 'react-reveal/Bounce'
function Home() {
  return (
    <div id="home" className='homepage'>
        <h1 className='typing'>
          <Typewriter
          options={{
            
            strings:["Kubera Digital","Ready For Your Growth!"],
            autoStart:true,
            loop:true,

          }}
          
          />
          </h1>

          <Fade left>
            <h2>Boost Your Bussines With Us. </h2>
          </Fade>

          
          
        
    </div>
  )
}

export default Home