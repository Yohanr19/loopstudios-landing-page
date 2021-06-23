import React from 'react'
import './IntroSection.css'
import interactive from './images/mobile/image-interactive.jpg'

const IntroSection = () => {
    return (
        <section id='IntroSection'>

                    <div className='interactive-img-container'>
                        <img className='interactive-img'  src={interactive} alt='Interactive'/>
                         </div>
                         <h2 className='interactive-header'>The leader in interactive VR</h2>
                         <p className='interactive-text'>Founded in 2011, Loopstudios has been producing world-class virtual reality 
  projects for some of the best companies around the globe. Our award-winning 
  creations have transformed businesses through digital experiences that bind 
  to their brand.</p>
        </section>
    )
}

export default IntroSection
