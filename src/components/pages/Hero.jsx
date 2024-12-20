import React from 'react'
import herobg from '/hero/Intro-bg.jpg'
import pple1 from '/hero/pple-1.png'
import pple2 from '/hero/pple-2.png'
import pple3 from '/hero/pple-3.png' 
import SlideContent from './SlideContent'
import {motion} from 'framer-motion'


const Hero = () => {

  return (
    <div id='home' >
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img  src={herobg} alt="Fitness background" className="object-cover h-screen w-full"/>
          <div className="absolute inset-0 hero-overlay"></div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/70 to-black/100"></div>
        </div>

        <div className="relative z-10 px-4 top-10 lg:top-14 xl:top-20">
          {/* Trust Badge */}
          <div className='flex justify-center w-full'>
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="flex items-center mb-8 bg-black backdrop-blur-sm px-4 py-2 rounded-full">
              <div className="flex -space-x-2">
                {[pple1,pple2,pple3].map((img,index) => (
                  <div key={index} className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 rounded-full border-2 border-white overflow-hidden">
                    <img src={img}  alt={`pple ${index + 1}`} width={40} height={40} className="w-full h-full object-cover"/>
                  </div>
                ))}
              </div>
              <span className="ml-3 text-sm lg:text-xl">Trusted by 3+ million users</span>
            </motion.div>
          </div>
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="flex flex-col md:flex-row gap-2 lg:flex-col items-center justify-center text-3xl  md:text-4xl lg:text-6xl xl:text-8xl font-bold mb-6 text-red-600">
            <p>Track Your Fitness</p>
            <p>Journey</p>
          </motion.div>
          <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="max-w-2xl mx-auto text-center text-lg md:text-xl text-gray-300 mb-8">
            Discover the ultimate fitness companion with GymFluencer. Effortlessly log your workouts,
            count reps, and track calories burned. Stay motivated and achieve your goals with ease.
          </motion.p>
        </div>
      </div>
      <SlideContent />
    </div>
  )
}

export default Hero