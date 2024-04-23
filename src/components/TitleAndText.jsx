import React from 'react'

const TitleAndText = () => {
  return (
    <>
      <section id='titletextsection' className='titletextsection mx-auto max-w-6xl px-2 sm:px-6 lg:px-8 relative'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='left-side mb-5 relative md:basis-1/2 md:mb-0'>
            <div className='md:max-w-[90%]'>
              <h2 className='uppercase text-xl md:text-xxl'>The Block chain Compressor for Modern Enterprise</h2>
            </div>
          </div>
          <div className='md:basis-1/2 flex justify-center'>
            <div className='md:basis-2/3'>
              <p>Deploy apps, manage routing, and enable interoperability across all blockchains with advanced threshold cryptography</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TitleAndText