import React from 'react'
import trainer1 from '/influncer/trainer3.png';
import trainer2 from '/influncer/trainer6.png';
import trainer3 from '/influncer/trainer7.png';
import trainer4 from '/blog/blog4.jpg';
import trainer5 from '/influncer/trainer5.jpg';

const OurService = () => {
  return (
    <div id='service'>
        <div className='max-w-2xl mx-auto py-5'>
            <h1 className='text-5xl text-center font-bold mb-6 text-red-600'>Our Service.</h1>
            <p className='text-xl md:text-2xl text-center'>GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.</p>
        </div>

        <div className='flex flex-col lg:flex-row py-16'>
            <div className="relative overflow-hidden group w-full lg:w-[310px] xl:w-full h-[200px] lg:h-[600px]">
                <img src={trainer1} alt="Image" className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <p className="text-white text-2xl font-semibold tracking-wide">TRACK</p>
                </div>
            </div>
            <div className="relative overflow-hidden group w-full lg:w-[310px] xl:w-full h-[200px] lg:h-[600px]">
                <img src={trainer2} alt="Image" className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <p className="text-white text-2xl font-semibold tracking-wide">ANALAYIS</p>
                </div>
            </div>
            <div className="relative overflow-hidden group w-full lg:w-[310px] xl:w-full h-[200px] lg:h-[600px]">
                <img src={trainer3} alt="Image" className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <p className="text-white text-2xl font-semibold tracking-wide">TRAIN</p>
                </div>
            </div>
            <div className="relative overflow-hidden group w-full lg:w-[310px] xl:w-full h-[200px] lg:h-[600px]">
                <img src={trainer4} alt="Image" className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <p className="text-white text-2xl font-semibold tracking-wide">CONNECT</p>
                </div>
            </div>
            <div className="relative overflow-hidden group w-full lg:w-[310px] xl:w-full h-[200px] lg:h-[600px]">
                <img src={trainer5} alt="Image" className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"/>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <p className="text-white text-2xl font-semibold tracking-wide">CHALLENGEs</p>
                </div>
            </div>
        </div>
        {/* Influncer */}
        
    </div>
  )
}

export default OurService