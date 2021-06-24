import React from 'react'
import './MobileMenu.css'

const MobileMenu = (props) => {

    const isDisplayed = props.isDisplayed
    return (
        <div className='mobile-menu' style={isDisplayed?{display: 'grid'}:{display:'none'}}>
            <div className='menu-options'>    
            <h3>About </h3>
            <h3>Careers </h3>
            <h3>Events</h3>
            <h3>Products </h3>
            <h3>Support </h3> 
            </div>
        </div>
    )
}

export default MobileMenu
