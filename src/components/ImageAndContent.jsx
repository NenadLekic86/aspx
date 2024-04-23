import React from 'react'

import UnionIcon from '../assets/images/union-icon.svg'


const ImageAndContent = ({customSectionClass, src, alt, title, subtitle, content, href, contentCustomClass}) => {
  return (
    <>
      <section className={`imageandcontent ${customSectionClass ? customSectionClass : ''} mx-auto max-w-6xl px-2 sm:px-6 lg:px-8`}>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='md:basis-7/12 mb-10 md:mb-0'>
            <div className='img-container relative flex justify-center'>
              <img 
                src={src} 
                alt={alt}
              />
            </div>
          </div>
          <div className='md:basis-5/12'>
            <div className={`z-50 relative ${contentCustomClass ? contentCustomClass : ''}`}>
              <p className='subtitle uppercase text-sm text-white/[0.32]'>{subtitle}</p>
              <h2 className='uppercase text-xl md:text-xxl'>{title}</h2>
              <p className='mt-3 mb-6'>{content}</p>
              {href ? (
                <a 
                  className='btn-main uppercase flex flex-row items-center px-[23px] py-[10px]'
                  href={href}
                >
                    <img 
                      className='mr-3'
                      src={UnionIcon} 
                      alt="" 
                    />
                    See more
                </a>
              ) : null }
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ImageAndContent