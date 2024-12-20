'use client';

import React, { useState, useEffect } from 'react'
import { FaAngleLeft,FaAngleRight  } from "react-icons/fa";
import 'pure-react-carousel/dist/react-carousel.es.css';
import person1 from '/transformation/person3.png'
import person2 from '/transformation/person6.png'
import person3 from '/transformation/person2.png'
import person4 from '/transformation/person5.png'
import person5 from '/transformation/person1.png'
import person6 from '/transformation/person4.png'


const transformations = [
  {
    name: 'Raj',
    age: 28,
    weeks: 24,
    beforeWeight: 80,
    afterWeight: 78,
    beforeFat: 25,
    afterFat: 12,
    beforeImage: person1,
    afterImage: person2,
  },
  {
    name: 'Povanaan',
    age: 32,
    weeks: 9,
    beforeWeight: 84,
    afterWeight: 75,
    beforeFat: 27,
    afterFat: 15,
    beforeImage: person3,
    afterImage: person4,
  },
  {
    name: 'Kamal',
    age: 25,
    weeks: 36,
    beforeWeight: 85,
    afterWeight: 74,
    beforeFat: 35,
    afterFat: 10,
    beforeImage: person5,
    afterImage: person6,
  },
];

const Transformation = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const nextSlide = () => { 
    setCurrentSlide((prev) => (prev + 1) % transformations.length); }; 
  const prevSlide = () => { 
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length); };
   useEffect(() => { 
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer); },
  []);

  return (
    <div className="w-full bg-black text-white py-12 px-4 sm:px-6 lg:px-8 " id='benifits'> 
      <div>
        <h1 className="text-center text-xl md:text-3xl lg:text-5xl font-bold mb-12 text-red-600"> TRANSFORMATIONS MADE POSSIBLE WITH GYMFLUENCER </h1> 
        <div className="relative py-10"> 
          {transformations.map((item, index) => ( 
            <div key={index} className={`${ index === currentSlide ? 'block' : 'hidden' } overflow-x-hidden`} > 
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto items-center"> 
                <div className="space-y-6 relative"> 
                  <div className="relative z-10 space-y-4"> 
                    <div className="flex items-center gap-8 border-l-8 border-redColour p-5 mb-10"> 
                      <div> 
                        <p className="lg:text-2xl font-bold">Name:</p> 
                        <p className="lg:text-2xl font-bold">{item.name}</p> 
                      </div> 
                      <div> 
                        <p className="lg:lg:text-2xl font-bold">Age:</p> 
                        <p className="lg:text-2xl font-bold">{item.age}</p>
                      </div> 
                    </div> 
                    <div className="inline-block px-4 py-2 bg-red-600 rounded-full"> {item.weeks} weeks </div> 
                    <div className="grid grid-cols-2 gap-4 "> 
                      <div> 
                        <p className="lg:text-2xl font-bold">Before</p> 
                        <p className="text-xl">Weight: {item.beforeWeight} kg</p> 
                        <p className="text-xl">Body fat: {item.beforeFat}%</p> 
                      </div> 
                      <div> 
                        <p className="lg:text-2xl font-bold">After</p> 
                        <p className="text-xl">Weight: {item.afterWeight} kg</p> 
                        <p className="text-xl">Body fat: {item.afterFat}%</p> 
                      </div> 
                    </div> 
                  </div> 
                </div> 
                <div className="grid grid-cols-2 gap-4"> 
                  <div className="relative"> 
                    <img src={item.beforeImage} alt={`${item.name} before transformation`} className="w-full h-full lg:w-[300px] lg:h-[400px] object-cover rounded-lg" /> 
                    <div className="absolute bottom-4 left-4 bg-red-600 px-3 py-1 rounded text-sm"> BEFORE </div> 
                  </div> 
                  <div className="relative"> 
                    <img src={item.afterImage} alt={`${item.name} after transformation`} className="w-full h-full lg:w-[300px] lg:h-[400px] object-cover rounded-lg" /> 
                    <div className="absolute bottom-4 left-4 bg-red-600 px-3 py-1 rounded text-sm"> AFTER </div> 
                  </div> 
                </div> 
              </div> 
            </div> ))} 
            <button onClick={prevSlide} className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors" > 
            <FaAngleLeft className="w-6 h-6" /> 
            </button> 
            <button onClick={nextSlide} className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 bg-red-600 p-2 rounded-full hover:bg-red-700 transition-colors" > 
            <FaAngleRight className="w-6 h-6" /> 
            </button> 
          </div> 
          <div className="flex justify-center mt-10 space-x-2"> {transformations.map((_, index) => ( <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full ${ index === currentSlide ? 'bg-red-600' : 'bg-gray-400' }`} ></button> ))} 
        </div> 
      </div> 
    </div>
  )
}

export default Transformation
