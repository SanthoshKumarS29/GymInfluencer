import React,{useState} from 'react'
import { FaPlus } from "react-icons/fa";
import CountUp from "react-countup";
import youteber from '/influncer/youtuber.png'
import { IoPlayCircleOutline } from "react-icons/io5";

const Mission = () => {
const [isOpen, setIsOpen] = useState(false); // State to control popup visibility
  const videoURL = "https://www.youtube.com/embed/pznrAWMhahA";

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);


  return (
    <div id='about'>
        <div className='p-10 md:p-20'>
            <div className='max-w-5xl mx-auto'>
                <h1 className='flex flex-col md:flex-row gap-2 lg:flex-col items-center justify-center text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold mb-6 text-red-600'>Your Fitness.<span>Our Mission.</span></h1>
                <p className='text-xl md:text-2xl text-center'>At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-center py-10 md:py-16 lg:p-20 gap-5 lg:gap-10'>
                <div className='flex flex-col justify-center items-center gap-4  p-5'>
                    <div className='flex items-center font-bold text-5xl'>
                        <CountUp start={400} end={463} duration={4} />K
                        <span className='text-3xl'><FaPlus /></span>
                    </div>
                    <p className='text-base lg:text-xl text-center text-[#71737b]'>Workouts logged and progress tracked every month</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4  p-5 lg:border-l-2 md:border-[#71737b]'>
                    <div className='flex items-center font-bold text-5xl '>
                        <CountUp start={100} end={164} duration={4} />K
                        <span className='text-3xl '><FaPlus /></span>
                    </div>
                    <p className='text-base lg:text-xl text-center text-[#71737b]'>Fitness enthusiasts connected through our platform</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-4  p-5 lg:border-l-2 md:border-[#71737b]'>
                    <div className='flex items-center font-bold text-5xl'>
                        <CountUp start={10} end={13} duration={4} />K
                        <span className='text-3xl'><FaPlus /></span>
                    </div>
                    <p className='text-base lg:text-xl text-center text-[#71737b]'>Countries where GymFluencer is making an impact</p>
                </div>
            </div>

            <div>
                {/* Thumbnail Image with Play Button */}
                <div className="relative max-w-3xl mx-auto">
                    <img src={youteber} alt="Image" className="w-[800px] h-[500px] object-cover rounded-xl border-white"/>
                    <div className="absolute w-full h-full top-0 flex items-center justify-center hover:bg-black/40 duration-200">
                    <button onClick={openPopup} className="text-white">
                        <IoPlayCircleOutline size={60} />
                    </button>
                    </div>
                </div>

                {/* Popup Modal */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="relative w-full max-w-4xl mx-auto p-4">
                        {/* Embedded YouTube Video */}
                        <div className="relative w-full aspect-w-16 aspect-h-9">
                            <button onClick={closePopup} className='absolute right-0 text-2xl py-4 pl-4'>X</button>
                            <iframe src = {videoURL} title="YouTube Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-[400px] rounded-lg"></iframe>
                        </div>
                    </div>
                    </div>
                )}
                </div>
        </div>
    </div>
  )
}

export default Mission