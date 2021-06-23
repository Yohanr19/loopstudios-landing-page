import React from 'react'
import logo from './images/logo.svg'
import iconFacebook from './images/icon-facebook.svg'
import iconInstagram from './images/icon-instagram.svg'
import iconTwitter from './images/icon-twitter.svg'
import iconPinterest from './images/icon-pinterest.svg'

import './Footer.css'


const Footer = () => {
    return (
        <div id='footer'>
             <div className='footer-logo'>
                 <img src={logo} alt='logo'/>
             </div>
             <h3>About </h3>
             <h3>Careers </h3>
             <h3>Events</h3>
             <h3>Products </h3>
             <h3>Support </h3>
             <div className='icons'>
                         <img className='social-icon' src={iconFacebook} alt='facebook'/>
                         <img className='social-icon' src={iconTwitter} alt='twitter'/>
                         <img className='social-icon' src={iconPinterest} alt='pinterest'/>
                         <img className='social-icon' src={iconInstagram} alt='instagram'/>
                 </div>
            <div className='copyright'>© 2021 Loopstudios. All rights reserved.</div>
        </div>
    )
}

export default Footer
