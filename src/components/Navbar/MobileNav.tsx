'use client'
import React from 'react'
import Navitem from './Navitem' // Adjust the path based on the actual location of Navitem

import { RiDropdownList } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg';




interface MobileNavProps {
  isMobile: boolean;
  closeNav: () => void;
}




const MobileNav: React.FC<MobileNavProps> = ({ isMobile, closeNav }) => {



  return (

    <div>

      {isMobile &&
        <>

          <div className="fixed inset-0 transform transition-all duration-500 z-[10000] bg-black opacity-70 w-full h-screen" onClick={closeNav}></div>
          <div className={`bg-lime-700 fixed justify-center flex flex-col items-center transform transition-all duration-300 w-[60%] h-screen top-0 left-0 z-10000 ${isMobile ? 'translate-x-0' : 'translate-x-full'}`}>


            <ul className='grid space-y-6 items-center space-x-10 text-gray-100 font-sans'>
              <Navitem address='/' title='Home' />
              <Navitem address='/about' title='About' />
              <Navitem address='/Program' title='Programs' icon={RiDropdownList} />
              <Navitem address='/faculty' title='Faculty' />
              <Navitem address='/contact' title='Contact' />
              <Navitem address='/login' title='Log in' />

            </ul>

            <button className='items-center gap-0.5  text-black mt-6 bg-white py-2   text-[12px] font-semibold  px-4 rounded-4xl hover:bg-lime-900 transition-all duration-200 '>
              SPEAK TO AN ADVISOR
              &#8594;
            </button>

            <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm-w-8 w-6 h-6 cursor-pointer' />
          </div>



        </>
      }
    </div >

  )
}

export default MobileNav
