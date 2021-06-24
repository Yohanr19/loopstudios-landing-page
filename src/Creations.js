import React from 'react'
import deepEarth from './images/mobile/image-deep-earth.jpg'
import nightArcade from './images/mobile/image-night-arcade.jpg'
import soccer from './images/mobile/image-soccer-team.jpg'
import theGrid from './images/mobile/image-grid.jpg'
import fromUp from './images/mobile/image-from-above.jpg'
import pocketBorealis from './images/mobile/image-pocket-borealis.jpg'
import curiosity from './images/mobile/image-curiosity.jpg'
import fishEye from './images/mobile/image-fisheye.jpg'
import desktopDeepEarth from './images/desktop/image-deep-earth.jpg'
import desktopNightArcade from './images/desktop/image-night-arcade.jpg'
import desktopSoccer from './images/desktop/image-soccer-team.jpg'
import desktopTheGrid from './images/desktop/image-grid.jpg'
import desktopFromUp from './images/desktop/image-from-above.jpg'
import desktopPocketBorealis from './images/desktop/image-pocket-borealis.jpg'
import desktopCuriosity from './images/desktop/image-curiosity.jpg'
import desktopFishEye from './images/desktop/image-fisheye.jpg'
import './Creations.css'

const dataDesktop = [
    {
        id: 1,
        title: 'Deep Earth',
        source: desktopDeepEarth,
    } ,
    {
        id: 2,
        title: 'Night Arcade',
        source: desktopNightArcade,
    } ,
    {
        id: 3,
        title: 'Soccer Team VR',
        source: desktopSoccer,
    } ,
    {
        id: 4,
        title: 'The grid',
        source: desktopTheGrid,
    } ,
    {
        id: 5,
        title: 'From up above VR',
        source: desktopFromUp,
    } ,
    {
        id: 6,
        title: 'Pocket Borealis',
        source: desktopPocketBorealis,
    } ,
    {
        id: 7,
        title: 'The Curiosity',
        source: desktopCuriosity,
    } ,
    {
        id: 8,
        title: 'Make it Fisheye',
        source: desktopFishEye,
    } ,
]
const dataMobile = [
    {
        id: 1,
        title: 'Deep Earth',
        source: deepEarth,
    } ,
    {
        id: 2,
        title: 'Night Arcade',
        source: nightArcade,
    } ,
    {
        id: 3,
        title: 'Soccer Team VR',
        source: soccer,
    } ,
    {
        id: 4,
        title: 'The grid',
        source: theGrid,
    } ,
    {
        id: 5,
        title: 'From up above VR',
        source: fromUp,
    } ,
    {
        id: 6,
        title: 'Pocket Borealis',
        source: pocketBorealis,
    } ,
    {
        id: 7,
        title: 'The Curiosity',
        source: curiosity,
    } ,
    {
        id: 8,
        title: 'Make it Fisheye',
        source: fishEye,
    } ,
]
const Creations = (props) => {
    const isDesktop = props.isDesktop
    let data = '';
    if (isDesktop) {
        data= dataDesktop
    }
    else{
        data= dataMobile
    }
    

    return (
        <section id='creations'>
                <h2 className='header'>
                Our creations
                </h2>
                <div className='creations-container'>
                   <>
                    {data.map ( (elem)=> {
                           return <div key={elem.id} className='creation'>
                               <h2 className='creation-title'>{elem.title}</h2>
                               <img className='creation-img' src={elem.source} alt={elem.title} />
                               </div> 
                    })}
                   </>  
                </div>
                <div className='more'>See All </div>
        </section>
    )
}
export default Creations
