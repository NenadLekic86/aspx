import React, { useState, useEffect, Suspense } from 'react'
import ThreeDLogo from '../assets/images/3D-logo.svg'
import ScrollNowIcon from '../assets/images/scroll-now-arrow.svg'
import HeroBg from '../assets/images/hero-bg.svg'

import { Canvas } from '@react-three/fiber'
import { Float, ScrollControls } from '@react-three/drei';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'

import { AmbientLight } from 'three'
import { Heart } from './Heart'

import { Experience } from './Experience';

const HeroSecond = () => {

  // State to track whether the spacebar is pressed
  const [isSpacePressed, setIsSpacePressed] = useState(false);

  // Event handler for keydown and keyup events
  const handleKeyDown = (event) => {
    if (event.code === 'Space') {
      setIsSpacePressed(true); // Spacebar is pressed
    }
  };

  const handleKeyUp = (event) => {
    if (event.code === 'Space') {
      setIsSpacePressed(false); // Spacebar is released
    }
  };

  // Add event listeners for keydown and keyup events
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);


  return (
    <>
      <section className='hero mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 min-h-screen'>
        <div 
          className='bg-overlap absolute top-0 left-0 w-full h-screen z-[-1]' 
          style={
            {
              backgroundImage: `url(${HeroBg})`, 
              backgroundRepeat: 'no-repeat', 
              backgroundSize: 'cover'
            }
          }
        ></div>
        <div className='top-[150px] flex flex-row justify-center items-center relative overflow-x-hidden'>
          <div className='socials justify-center items-center hidden md:flex absolute z-50'>
            <a className='hover:text-white' href='#facebook' target='_blank'><span style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>FACEBOOK</span></a> <span className="slash px-5">/</span>
            <a className='hover:text-white' href='#twitter' target='_blank'><span style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>TWITTER</span></a> <span className="slash px-5">/</span>
            <a className='hover:text-white' href='#linkedin' target='_blank'><span>LINKEDIN</span></a>
          </div>
          <div className='basis-full'>
          <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
          <OrbitControls enableZoom={false} />
          <Float floatIntensity={2} speed={3} active={isSpacePressed} >
            <ScrollControls pages={2}>
              {/* <Experience isSpacePressed={isSpacePressed} /> */}
              <Heart scale={0.25} />
              <Environment preset="sunset" blur={0.4} />
            </ScrollControls>
            </Float>
          </Canvas>

            <p className='text-center text-white/[.19] text-[12px] tracking-[.25em]'>HOLD SPACE</p>
          </div>
          <div className='right-container hidden md:block absolute top-[45%] right-0 z-50'>
            <a href='#titletextsection'>
              <p className='text-white/[.19] uppercase relative hover:text-white'><span style={{transform: 'matrix(1, 0, 0, 1, 0, 0)'}}>Scroll now</span></p>
              <img
                className='absolute top-[-65px] right-[45px]'
                src={ScrollNowIcon}
                alt='' 
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSecond