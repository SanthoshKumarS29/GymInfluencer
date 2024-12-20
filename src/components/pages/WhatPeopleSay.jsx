import React from 'react';
import { FaStar } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { TfiLocationPin } from "react-icons/tfi";
import person1 from '/influncer/trainer4.jpg'
import person2 from '/influncer/trainer1.jpg'
import person3 from '/influncer/trainer2.jpg'
import map from '/blog/Map.png'
import contact1 from '/blog/blog10.jpg'
import contact2 from '/blog/blog8.jpeg'
import contact3 from '/blog/blog1.jpg'
import contact4 from '/blog/blog6.jpg'
import contact5 from '/blog/blog5.png'
import contact6 from '/blog/blog9.png'
import contact7 from '/blog/blog3.jpg'

const WhatPeopleSay = () => {
  const testimonials = [
    {
      id: 1,
      name: "MichealField",
      role: "Software Engineer",
      image: person1,
      text: "I love how user-friendly the app is. Logging workouts has never been easier!"
    },
    {
      id: 2,
      name: "David Leo",
      role: "Designer",
      image: person2,
      text: "I've seen amazing results since using GymFluencer. The progress tracking feature keeps me motivated!"
    },
    {
      id: 3,
      name: "Angelia Jolie",
      role: "Model",
      image: person3,
      text: "GymFluencer has transformed the way I work out. The rep counting feature is a game-changer!"
    }
  ];

  // Double the testimonials array for seamless looping
  const doubledTestimonials = [...testimonials, ...testimonials];

      const contact = [
          {
            id: 1,
            name: "Physc Gym Nerul 24/7",
            phone: "+91 1234567890",
            image: contact1,
            location: "Nerul, Navi Mumbai, Maharashtra, 400706"
          },
          {
            id: 2,
            name: "Iron Fitness",
            phone: "+91 1234567890",
            image: contact2,
            location: "Nerul, Navi Mumbai"
          },
          {
            id: 3,
            name: "Yuva Fitness",
            phone: "+91-22-0001-0211",
            image: contact3,
            location: "Nerul, Navi Mumbai"
          },
          {
            id: 4,
            name: "Ozone The Gym",
            phone: "+91 1234567890",
            image: contact4,
            location: "Nerul, Navi Mumbai"
          },
          {
            id: 5,
            name: "Edge Fitness Seawoods",
            phone: "+91 1234567890",
            image: contact5,
            location: "Nerul, Navi Mumbai"
          },
          {
            id: 6,
            name: "The Square Gym",
            phone: "+91 1234567890",
            image: contact6,
            location: "Nerul, Navi Mumbai"
          },
          {
            id: 7,
            name: "Arnolds Total Fitness",
            phone: "+91 1234567890",
            image: contact7,
            location: "Nerul, Navi Mumbai"
          }
        ];

  return (
    <div>
      <div className="relative w-full overflow-hidden">
        <img src="/blog/blog12.jpg"  alt="background"  className="w-full h-[600px] object-cover"/>
        
        <div className="absolute inset-0 bg-black/65">
          <h1 className="text-2xl lg:text-6xl text-center py-16 text-white">What People Say</h1>
          
          <div className="relative h-[400px] overflow-hidden">
            <div className="absolute w-full flex animate-[slide_40s_linear_infinite]">
              {doubledTestimonials.map((item, index) => (
                <div key={index} className="flex-shrink-0 w-[800px] px-4">
                  <div className="flex">
                    <img src={item.image} alt={item.name} className="w-[250px] h-[300px] object-cover rounded-l-3xl"/>
                    <div className="space-y-12 flex flex-col justify-center w-[500px] bg-black/75 px-6 rounded-r-3xl">
                      <div className="flex text-3xl text-red-500 gap-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                      <h1 className="text-xl text-white">{item.text}</h1>
                      <div>
                        <p className="text-xl text-white">{item.name}</p>
                        <p className="text-sm text-gray-400">
                          <span>---</span>{item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='max-w-2xl mx-auto py-16'>
          <h1 className='text-4xl text-center font-bold mb-6 text-red-600'>Find Your Nearest Gym</h1>
          <p className='text-xl md:text-2xl text-center'>Easily discover gyms near your location to kickstart your fitness journey today!</p>
      </div>
      {/* Maps */}
      <div>
          <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="flex flex-col overflow-y-scroll h-[600px]  gap-4">
                  {contact.map((item, index) => (
                      <div key={index}>
                      <div className="w-full flex items-center gap-1 md:gap-4 hover:border-red-700 hover:bg-red-800 transition-all duration-300 rounded-lg">
                          <div className=''>
                              <img src={item.image} alt="testimonial" className="w-44 h-44 object-cover"/>
                          </div>
                          <div className="flex flex-col justify-center w-[200px] md:w-full">
                              <h1 className="text-base md:text-2xl font-semibold text-white transition-all pb-7">{item.name}</h1>
                              <div className="text-gray-300 space-y-3text-sm md:text-xl">
                                  <p className="flex items-center gap-2">
                                  <span><LuPhone className="text-red-500" /></span>{item.phone}</p>
                                  <p className="flex items-center gap-2 mt-1"><span><TfiLocationPin className="text-red-500" /></span>{item.location}</p>
                              </div>
                          </div>
                      </div>
                      </div>
                  ))}
                  </div>

                  {/* Map Section */}
                  <div>
                      <img src={map} alt="Map" className="w-full h-[600px] object-contain rounded-lg shadow-lg"/>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;