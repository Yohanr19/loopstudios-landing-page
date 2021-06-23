import React from 'react'
import hamIcon from './images/icon-hamburger.svg'
import loopstudioLogo from './images/logo.svg'
import './TopSide.css'
import MobileMenu from './MobileMenu'


const TopSide = () => {
    return (
        <div className='topside-container'>
            <MobileMenu />
            <div className='menu-logo'>
                <img className='logo' src={loopstudioLogo} alt='loopstudio'/>
                <img className='menu-icon' src={hamIcon} alt='ham-icon'/> 
            </div>
            <div className='topside-text'>
              <h1>Immersive experiences that deliver </h1>
                </div>
        </div>
    )
}

export default TopSide
