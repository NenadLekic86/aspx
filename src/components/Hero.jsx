import React, { useState, Suspense } from 'react'
import ThreeDLogo from '../assets/images/3D-logo.svg'
import ScrollNowIcon from '../assets/images/scroll-now-arrow.svg'
import HeroBg from '../assets/images/hero-bg.svg'

import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Earth from '../../public/Earth'
import { AmbientLight } from 'three'

const Hero = () => {
  return (
    <>
      <section className="hero mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 min-h-screen">
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
          <div className='left-container hidden md:block absolute top-[9%] left-0 z-50'>
            <ul className='socials flex justify-center items-center'>
              <li>
                <a className='hover:text-white' href="#facebook">Facebook</a>
              </li>
              <li>
                <a className='hover:text-white' href="#twitter">Twitter</a>
              </li>
              <li>
                <a className='hover:text-white' href="#linkedin">Linkedin</a>
              </li>
            </ul>
          </div>
          <div className='basis-full'>
            <Canvas>
              <ambientLight intensity={0.5}/>
              <OrbitControls />
              <Suspense fallback={null}>
                <Earth />
              </Suspense>
              <Environment preset='sunset' />
              <ContactShadows position={[0, -1.2, 0]} opacity={5} scale={50} blur={1} far={10} resolution={256} color='#000000'/>
            </Canvas>

            <p className='text-center text-white/[.19] text-[12px] tracking-[.25em]'>HOLD SPACE</p>
          </div>
          <div className='right-container hidden md:block absolute top-[45%] right-0 z-50'>
            <a href="#titletextsection">
              <p className='text-white/[.19] uppercase relative hover:text-white'>Scroll now</p>
              <img
                className='absolute top-[-65px] right-[45px]'
                src={ScrollNowIcon}
                alt="" 
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero