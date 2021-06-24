import React, {useState} from 'react'
import hamIcon from './images/icon-hamburger.svg'
import iconClose from './images/icon-close.svg'
import loopstudioLogo from './images/logo.svg'
import './TopSide.css'
import MobileMenu from './MobileMenu'


const TopSide = (props) => {
    const isDesktop = props.isDesktop;
    const [menuDisplay, setMenuDisplay] = useState(false);
    
    return (
        <div className='topside-container'>
            <div className='desktop-menu'>
                <div className='desktop-options'>
                <h3>About </h3>
                 <h3>Careers </h3>
                 <h3>Events</h3>
                <h3>Products </h3>
                <h3>Support </h3> 
                </div>
                 </div>
            <MobileMenu isDisplayed = {isDesktop?false:menuDisplay} />
            <div className='menu-logo'>
                <img className='logo' src={loopstudioLogo} alt='loopstudio'/>
                <img onClick = {()=> setMenuDisplay(!menuDisplay)}
                 style={isDesktop?{display: 'none'}: {display: 'block'}}
                 className='menu-icon' src={menuDisplay?iconClose:hamIcon} alt='ham-icon'/> 
            </div>
            <div className='topside-text'>
              <h1>Immersive experiences that deliver </h1>
                </div>
        </div>
    )
}

export default TopSide
