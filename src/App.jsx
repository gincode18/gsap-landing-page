import React, { useEffect ,useRef} from 'react';
import gsap from 'gsap';
import './App.css';
import { Expo } from 'gsap/gsap-core';

function App() {
  const imageContainerRef = useRef(null);
  const imagerest=()=>{
    gsap.to(".image-container", {
      width: "0%",
      duration:0,
     onComplete:animateImageContainers
      
    });

  }
  const textrest=()=>{
    gsap.to(".text h1", {
      top:"110px",
      onComplete:animateText
    });

  }
  const animateImageContainers = () => {
    gsap.to(".image-container", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 2,
      stagger:2,
      delay:3,
      onComplete: imagerest, // Call animateImageContainers again when the animation completes
    });
  };
  const animateText = () => {
    gsap.to(".text h1", {
      ease: Expo.easeInOut,
      stagger:2,
      top:0,
      delay:3,
      
    })
    gsap.to(".text h1", {
      ease: Expo.easeInOut,
      stagger:2,
      top:"110px",
      delay:5, 
      onComplete:animateText 
    });
  };

  useEffect(() => {
 
    animateImageContainers()
    animateText()
   
    
    
  }, []);

  return (

    <div className='center'>
      <div className="text">
        <h1>Gear 1</h1>
        <h1>Gear 2</h1>
        <h1>Gear 3</h1>
        <h1>Gear 4 Boundman</h1>
        <h1>Gear 4 Tankman</h1>
        <h1>Gear 4 Snakeman</h1>
        <h1>Gear 5</h1>
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
      <div id='three' className='image-container'>
        <img src='./gear4b.png' alt='agf'></img>
      </div>
      <div id='three' className='image-container'>
        <img src='./gear4t.jpg' alt='agf'></img>
      </div>
      <div id='three' className='image-container'>
        <img src='./gear4s.jpg' alt='agf'></img>
      </div>
      <div id='three' className='image-container'>
        <img src='./gear5.jpg' alt='agf'></img>
      </div>

    </div>


  )
}

export default App
