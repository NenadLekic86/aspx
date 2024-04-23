import React from 'react'

import Logo from '../assets/images/logo.svg'
import Newsletter from './Newsletter'

const Footer = () => {
  return (
    <>
      <section id='footer' className='footer mx-auto max-w-6xl px-2 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:basis-7/12'>
            <a href="/">
              <img src={Logo} alt="" />
            </a>

            <Newsletter />

            <p className='copyright text-[18px] text-white/[0.19] hidden md:block'>© Siddha Protocol {new Date().getFullYear()}</p>
          </div>
          <div className='md:basis-5/12 mt-5 md:mt-0'>
            <ul>
              <li className='relative flex items-center'>
                01
                <a href="/about-us">About us</a>
              </li>
              <li className='relative flex items-center'>
                02
                <a href="/master-plan">Master plan</a>
              </li>
              <li className='relative flex items-center'>
                03
                <a href="/culture">Culture</a>
              </li>
              <li className='relative flex items-center'>
                04
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <p className='copyright text-[18px] text-white/[0.19] md:hidden mt-10'>© Siddha Protocol {new Date().getFullYear()}</p>
      </section>
    </>
  )
}

export default Footer