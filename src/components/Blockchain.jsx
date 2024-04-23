import React from 'react'
import IllustrationImageTwo from '../assets/images/illustration-2.svg'
import ScrollIcon from '../assets/images/scroll-icon.svg'


const Blockchain = () => {
  return (
    <>
      <section className='blockchain mx-auto max-w-6xl px-2 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-center mb-5'>
          <div className='md:basis-8/12'>
            <h2 className='uppercase text-xl md:text-xxl'>Blockchain Infrastructure Automation</h2>
          </div>
          <div className='md:basis-4/12 hidden md:block'>
            <div className='mx-auto max-w-64'>
              <div className='flex flex-row items-center justify-around'>
                <img 
                  className='rotate-90 mr-11'
                  src={ScrollIcon} 
                  alt="" 
                />
                <img 
                  className='rotate-[-90deg]'
                  src={ScrollIcon} 
                  alt="" 
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:basis-7/12'>
            <div className='img-container-two relative'>
              <img 
                src={IllustrationImageTwo} 
                alt="" 
              />
            </div>
          </div>
          <div className='md:basis-5/12'>
            <div className='relative'>
              <h3 className='text-lg mb-3'>Deployment of Applications:</h3>
              <p>Automates the deployment of blockchainapplications for efficient, consistent setup acrossmultiple platforms.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blockchain