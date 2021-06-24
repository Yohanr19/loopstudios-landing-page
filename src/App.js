import React, {useState, useEffect} from 'react';
import './App.css';
import TopSide from './TopSide';
import IntroSection from './IntroSection';
import Creations from './Creations';
import Footer from './Footer';

function App() {

  const [isDesktop, setIsDesktop] = useState( (window.innerWidth > 1000));
  
  useEffect ( ()=> {
    window.addEventListener('resize', ()=> {
        if(window.innerWidth>1000 ) 
          {
            setIsDesktop(true);
          }
          else{
            setIsDesktop(false)
          }
    } )
  })

  return (
    <div className="App">
         <TopSide isDesktop={isDesktop}/>
         <IntroSection />
         <Creations isDesktop={isDesktop} />
         <Footer/>
    </div>
  );
}

export default App;
