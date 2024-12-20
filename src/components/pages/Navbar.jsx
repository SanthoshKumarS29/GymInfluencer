import React, { useState } from 'react'
import logo from '/logo/header-logo.svg'
import { FaAngleDown } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";
import { motion } from 'framer-motion'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <motion.div initial={{y: -100}} animate={{y: 0}} transition={{ duration: 0.5}} className="w-full px-4 py-2 md:px-5 md:py-2 xl:px-0 xl:py-0 max-w-7xl mx-auto fixed left-0 sm:left-10 md:left-0 xl:left-28 top-8 z-50">
        {/* Start with lap view */}
        <div className='hidden lg:block'>
            <div className='flex justify-between items-center lg:gap-5 xl:gap-10 bg-transparent backdrop-blur-3xl px-5 py-3 rounded-full'>
                <div>
                    <img src={logo} alt="GymFluencer" className='h-10'/>
                </div>
                <nav className='flex list-none lg:text-xl xl:text-2xl text-gray-200 lg:gap-4 xl:gap-8'>
                    <li className='hover:text-redColour duration-200 ease-in-outs cursor-pointer'><a href='#home'>Home</a></li>
                    <li className='hover:text-redColour duration-200 ease-in-outs cursor-pointer'><a href='#about'>About</a></li>
                    <li className='relative group'>
                        <span className='flex items-center gap-2 hover:text-redColour duration-200 ease-in-outs cursor-pointer'><a href='#service'> Our Service </a><i><FaAngleDown /></i></span>
                        <ul className='absolute w-full left-0 top-[30px] px-3 py-6 mt-0 hidden group-hover:flex flex-col gap-3 text-[17px] bg-blackColour duration-300 ease-in-out'> 
                            <li className='hover:text-white duration-200 ease-in-outs cursor-pointer'><a href='#serrvic'>WorkOut Plan</a></li>
                            <li className='hover:text-white duration-200 ease-in-outs cursor-pointer'><a href='#servic'>Diet Plan</a></li>
                        </ul>
                    </li>
                    <li className='hover:text-redColour duration-200 ease-in-outs cursor-pointer'><a href='#benifits'>Benifites</a></li>
                    <li className='hover:text-redColour duration-200 ease-in-outs cursor-pointer'><a href='#blog'>Blogs</a></li>
                    <li className='hover:text-redColour duration-200 ease-in-outs cursor-pointer'><a href='#contact'>Contact</a></li>
                </nav>
                <div>
                    <button className='border-2 border-redColour bg-redColour px-8 py-3 text-xl rounded-full hover:bg-transparent duration-300 ease-in'>Join as now</button>
                </div>
            </div>
        </div>
        {/* Start with mble view */}
        <div className="block lg:hidden">
            <div className="flex justify-between items-center gap-10 bg-transparent backdrop-blur-3xl px-5 py-3 rounded-full">
                <div>
                    <img src={logo} alt="GymFluencer" className='h-8'/>
                </div>
                <div onClick={handleNav} className="cursor-pointer text-white text-3xl">
                    <HiBars3BottomRight />
                </div>
            </div>

            {/* Dropdown Navigation */}
            {nav && (
                <nav className="absolute mt-4 bg-blackColour text-white rounded-lg p-4 w-36 right-10">
                <ul className="flex flex-col list-none text-lg gap-4">
                    <li className="hover:text-redColour duration-200 ease-in-out cursor-pointer"><a href='#home'>Home</a></li>
                    <li className="hover:text-redColour duration-200 ease-in-out cursor-pointer"><a href='#about'>About</a></li>
                    <li className="hover:text-redColour duration-200 ease-in-out cursor-pointer"><a href='#service'>Service</a></li>
                    <li className="hover:text-redColour duration-200 ease-in-out cursor-pointer"><a href='#blog'>Blogs</a></li>
                    <li className="hover:text-redColour duration-200 ease-in-out cursor-pointer"><a href='#contact'>Contact</a></li>
                </ul>
                </nav>
            )}
        </div>
    </motion.div>
  )
}

export default Navbar