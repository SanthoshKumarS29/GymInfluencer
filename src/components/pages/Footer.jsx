import React from 'react'
import logo from '/logo/image-logo.svg'
import { FaInstagram,FaTwitter,FaYoutube  } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='contact'>
      <div className="bg-black text-white py-8 px-4">
      <div className="flex flex-col items-center text-center space-y-10">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center gap-2 text-white font-bold">
              <img src={logo} alt="GymFluencer" className='h-12'/>
              <span className='text-2xl'>GymFlunecer</span>
            </div>
          </div>
          <p className="text-gray-400 text-2xl">Where Fitness Meets Social <br />Connection!</p>
          <a href="mailto:hello@gymfluencer.com"  className="text-gray-400 bg-gray-900 p-4  rounded-lg text-xl hover:text-white transition-colors">hello@gym.birlaventures.com</a>
        </div>
        <nav className="flex justify-center space-x-6 md:text-xl lg:text-2xl mt-10">
          <a href="/"  className="text-gray-400 hover:text-white transition-colors"> Home</a>
          <a href="/"  className="text-gray-400 hover:text-white transition-colors"> WorkOut Plan</a>
          <a href="/"  className="text-gray-400 hover:text-white transition-colors"> Diet Plan</a>
          <a href="/"  className="text-gray-400 hover:text-white transition-colors"> FAQ&apos;s</a>
        </nav>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 GymFluencer. All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"className="text-gray-400 hover:text-white transition-colors">
                <FaYoutube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer