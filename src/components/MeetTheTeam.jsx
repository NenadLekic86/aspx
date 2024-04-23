import React from 'react'
import UsersAndInvestors from './UsersAndInvestors'

import UnionIcon from '../assets/images/union-icon.svg'

const MeetTheTeam = ( href ) => {
  const { users, investors } = UsersAndInvestors

  return (
    <>
      <section className='meetTheTeam mx-auto max-w-6xl px-2 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <div className='team-container xl:basis-1/2 md:me-3 mb-10 md:mb-0'>
            <p className='subtitle uppercase text-sm text-white/[0.32]'>MEET THE TEAM</p>
            <h2 className='uppercase text-xl md:text-xxl'>Led by domain experts</h2>

            <div className='grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-4 justify-center my-4'>
              {users.map((user) => (
                <div key={user.id} className='uai-card flex justify-center items-center'>
                  <img src={user.src} alt={user.alt} />
                </div>
              ))}
            </div>
            {href ? (
              <a 
                className='btn-main uppercase flex flex-row items-center px-[23px] py-[10px] w-full justify-center mt-4'
                href={href}
              >
                  <img 
                    className='mr-3'
                    src={UnionIcon} 
                    alt="" 
                  />
                  Meet the team
              </a>
            ) : null }
          </div>
          <div className='investors-container xl:basis-1/2 md:ms-3'>
            <p className='subtitle uppercase text-sm text-white/[0.32]'>Investors</p>
            <h2 className='uppercase text-xl md:text-xxl'>Supported by the best</h2>

            <div className='grid grid-rows-3 md:grid-rows-2 grid-flow-col gap-4 justify-center my-4'>
              {investors.map((investor) => (
                <div key={investor.id} className='uai-card investors flex justify-center items-center'>
                  <img src={investor.src} alt={investor.alt} />
                </div>
              ))}
            </div>
            {href ? (
              <a 
                className='btn-main uppercase flex flex-row items-center px-[23px] py-[10px] w-full justify-center mt-4'
                href={href}
              >
                  <img 
                    className='mr-3'
                    src={UnionIcon} 
                    alt="" 
                  />
                  Meet the team
              </a>
            ) : null }
          </div>
        </div>
      </section>
    </>
  )
}

export default MeetTheTeam