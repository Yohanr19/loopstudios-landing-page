import React from 'react'
import deepEarth from './images/mobile/image-deep-earth.jpg'
import nightArcade from './images/mobile/image-night-arcade.jpg'
import soccer from './images/mobile/image-soccer-team.jpg'
import theGrid from './images/mobile/image-grid.jpg'
import fromUp from './images/mobile/image-from-above.jpg'
import pocketBorealis from './images/mobile/image-pocket-borealis.jpg'
import curiosity from './images/mobile/image-curiosity.jpg'
import fishEye from './images/mobile/image-fisheye.jpg'
import './Creations.css'

const data = [
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
const Creations = () => {
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
