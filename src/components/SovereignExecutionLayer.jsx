import React from 'react'
import IllustrationEarth from '../assets/images/illustration-earth.svg'
import SolarFolder from '../assets/images/solar_add-folder-bold-duotone.svg'
import SolarHearth from '../assets/images/solar_bag-heart-bold-duotone.svg'
import SolarRing from '../assets/images/solar_benzene-ring-bold-duotone.svg'

const SovereignExecutionLayer = () => {
  return (
    <>
      <section className='sovereignexecutionlayer mx-auto max-w-6xl px-2 sm:px-6 lg:px-8'>
        <h2 className='uppercase text-xl md:text-xxl mb-3'>Introducing A Sovereign Execution Layer</h2>

        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:basis-5/12'>
            <div className='card relative mb-5'>
              <div className='card-icon absolute top-5 right-5'>
                <img src={SolarHearth} alt="" />
              </div>
              <h3 className='text-lg mb-3'>Decentralized</h3>
              <p>Siddha protocol is designed to be self-sustaining, ensuring continued operation and resilience through its distributed architecture, with no single point of failure or governance.</p>
            </div>
            <div className='card relative mb-5'>
              <div className='card-icon absolute top-5 right-5'>
                <img src={SolarFolder} alt="" />
              </div>
              <h3 className='text-lg mb-3'>Trustless</h3>
              <p>Anyone can build on top of Siddha without approval, no matter where they are or what they’re building</p>
            </div>
            <div className='card relative'>
              <div className='card-icon absolute top-5 right-5'>
                <img src={SolarRing} alt="" />
              </div>
              <h3 className='text-lg mb-3'>Censorship Resistant</h3>
              <p>Neither governments nor financial institutions looking to front run can ever access a message.</p>
            </div>
          </div>
          <div className='md:basis-7/12'>
            <div className='illustrationEarth-container relative'>
              <img 
                src={IllustrationEarth}
                alt="" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SovereignExecutionLayer