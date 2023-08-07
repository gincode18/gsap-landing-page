import React, { useEffect ,useRef} from 'react';
import gsap from 'gsap';
import './App.css';
import { Expo } from 'gsap/gsap-core';

function App() {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    // Animation code using gsap and React ref
    gsap.to(".image-container", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 2,
      stagger:2
    });
    gsap.to(".text h1", {
      ease: Expo.easeInOut,
      stagger:2,
      top:0,
    });
    gsap.to(".text h1", {
      ease: Expo.easeInOut,
      stagger:2,
      top:"110px",
      delay:2
    });
  }, []);

  return (

    <div className='center'>
      <div className="text">
        <h1>Gear 1</h1>
        <h1>Gear 2</h1>
        <h1>Gear 3</h1>
      </div>
      <div id='one' className='image-container'>
        <img src='./gear1.jpg' alt='agf'></img>
      </div>
      <div id='two' className='image-container'>
        <img src='./gear2.jpg' alt='agf'></img>
      </div>
      <div id='three' className='image-container'>
        <img src='./gear3.png' alt='agf'></img>
      </div>

    </div>


  )
}

export default App
