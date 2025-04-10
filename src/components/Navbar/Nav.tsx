'use client'
import React from 'react'
import Navitem from './Navitem'
import { FaUser } from "react-icons/fa";
import { RiDropdownList } from 'react-icons/ri';
import { HiBars3BottomRight } from 'react-icons/hi2';
<FaUser />

interface NavProps {
    openNav: () => void;
  }
  

const Nav:React.FC<NavProps> = ({openNav}) => {
    return (
        <div className='bg-black'>
            <div className="flex justify-between items-center  w-[90%]  mx-auto pt-4 pb-4">
                <div className='text-2xl md:text-3xl lg:text-4xl text-gray-100 font-sans'>
                    Λugment
                </div >

                <ul className='xl:flex hidden items-center space-x-10 text-gray-100 font-sans'>
                    <Navitem address='/' title='Home' />
                    <Navitem address='/about' title='About' />
                    <Navitem address='/Program' title='Programs' icon={RiDropdownList} />
                    <Navitem address='/faculty' title='Faculty' />
                    <Navitem address='/contact' title='Contact' />
                    <Navitem address='/' title='|' />
                    <li className='flex items-center gap-3'>
                        <FaUser />
                        <Navitem address='/login' title='Log in' />
                    </li>
                </ul>

                <button className='xl:flex items-center gap-0.5  hidden text-black  bg-lime-300 py-2  md:py-3 text-[12px] font-semibold md:px-8 px-4 rounded-4xl hover:bg-lime-900 transition-all duration-200 '>
                    SPEAK TO AN ADVISOR
                    &#8594;
                </button>

                <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white xl:hidden font-extrabold' onClick={openNav} />
            </div>

        </div >
    )
}

export default Nav
