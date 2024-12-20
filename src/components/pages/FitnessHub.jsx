import React,{useEffect,useRef} from 'react';
import blog16 from '/blog/Blog16.png';
import blog1 from '/blog/blog14.png';
import blog2 from '/blog/blog15.png';
import blog3 from '/influncer/youtuber.png';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import influencer from '/influncer/Infuencer.png'
// Icons
import { GoPeople } from "react-icons/go";
import { FaEarthAmericas } from "react-icons/fa6";
import { PiStarFourBold } from "react-icons/pi";
import { PiSmileyStickerBold } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import Transformation from './Transformation';
import WhatPeopleSay from './WhatPeopleSay';

const FitnessHub = () => {

    const logosRef = useRef(null);
  
    useEffect(() => {
      const duplicateCarousel = (ulRef) => {
        if (ulRef.current) {
          const ul = ulRef.current;
          const duplicate = ul.cloneNode(true);
          duplicate.setAttribute("aria-hidden", "true");
          ul.parentElement.appendChild(duplicate);
        }
      };
  
      duplicateCarousel(logosRef);

    },);

  return (
    <div className="mt-20">

      <div className='py-16'>
          <div className='flex flex-col justify-center items-center space-y-5'>
              <p className='flex items-center gap-1 bg-gray-900 py-1 px-2 rounded-full text-xl'><FaRegStar /> Our Benifits</p>
              <h1 className='text-4xl lg:text-6xl text-center font-bold mb-6 text-red-600'>Discover GymFluencer Benefits</h1>
              <p className='text-base text-center'>Unlock your full potential with GymFluencer your personal fitness partner for progress and motivation</p>
          </div>
      </div>


      <div className='px-10'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-9 items-center justify-center'>
              <div className='p-8 bg-[#09090a] rounded-xl'>
                  <span><GoPeople size={60} className='bg-[#18181a] p-4 rounded-xl'/></span>
                  <h1 className='mt-6 text-base xl:text-2xl text-redColour font-bold'>Effortless Workout Logging</h1>
                  <p className='text-base xl:text-2xl text-gray-200'>Easily log your workouts and monitor your progress over time with our intuitive logging feature.</p>
              </div>
              <div className='row-span-2 w-full lg:w-[305px] ml-0 lg:ml-0 xl:ml-16 2xl:ml-30'>
                  <img src={influencer} alt="Image" className='object-cover rounded-lg' />
              </div>
              <div className='p-8 bg-bg-[#09090a] rounded-xl'>
                  <span><PiStarFourBold size={60} className='bg-[#18181a] p-4 rounded-xl'/></span>
                  <h1 className='mt-6 text-base xl:text-2xl text-redColour font-bold'>Personalized Workout Plans</h1>
                  <p className='text-base xl:text-2xl text-gray-200'>AI-powered workout plans tailored to your fitness level, goals, and progress.</p>
              </div>
              <div className='p-8 bg-bg-[#09090a] rounded-xl '>
                  <span><FaEarthAmericas size={60} className='bg-[#18181a] p-4 rounded-xl'/></span>
                  <h1 className='mt-6 text-base xl:text-2xl text-redColour font-bold'>Accurate Rep Counting</h1>
                  <p className='text-base xl:text-2xl text-gray-200'>Count your reps accurately with our app, ensuring consistency and improved performance.</p>
              </div>
              <div className='p-8 bg-bg-[#09090a] rounded-xl'>
                  <span><PiSmileyStickerBold size={60} className='bg-[#18181a] p-4 rounded-xl'/></span>
                  <h1 className='mt-6 text-base xl:text-2xl text-redColour font-bold'>Calorie Calculation & Personalized Diet Plans</h1>
                  <p className='text-base xl:text-2xl text-gray-200'>Calculate calories burned during workouts and AI-customized meal plans for optimal nutrition and wellness.</p>
              </div>
          </div>
      </div>

      <div className="relative overflow-hidden">
        <img src={blog16} alt="Background" className="w-full h-[700px] lg:h-full object-cover" />
        <div className="absolute inset-0 bg-black/80 flex justify-center items-center">
          <div className="text-white px-4 md:px-6 py-8 w-full max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="w-full max-w-xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-red-600">
                  Your Personalized Fitness Hub
                </h1>
                <p className="text-base md:text-lg mb-4">
                  Personalized workout routines tailored to your goals and preferences.
                </p>
                <p className="text-base md:text-lg mb-4">
                  Get expert guidance with virtual coaching sessions, available anytime, anywhere.
                </p>
                <p className="text-base md:text-lg">
                  Track your fitness journey with detailed analytics, goal setting, and achievements.
                </p>
              </div>

              <div className="w-full">
                <CarouselProvider naturalSlideWidth={100} naturalSlideHeight={125} totalSlides={3} isPlaying={true} interval={3000} infinite={true} className="w-full lg:w-[600px] h-[300px]" orientation='vertical'
                >
                  <Slider className="h-full">
                    <Slide index={0} className="h-full">
                      <img src={blog1} alt="Blog 1" className="object-cover" />
                    </Slide>
                    <Slide index={1} className="h-full">
                      <img src={blog2} alt="Blog 2" className="object-cover" />
                    </Slide>
                    <Slide index={2} className="h-full">
                      <img src={blog3} alt="Blog 3" className="object-cover" />
                    </Slide>
                  </Slider>
                </CarouselProvider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative flex flex-col justify-center overflow-hidden">
          <div className="w-full px-4 md:px-6">
            <div className="text-center">
              <div className="w-full inline-flex flex-nowrap overflow-hidden bg-redColour">
                <ul  ref={logosRef}  className="flex items-center [&_li]:py-2 justify-center md:justify-start [&_li]:mx-2 animate-infinite-scroll-benifits text-xl">
                  <li>Progress</li>
                  <li>Fitness</li>
                  <li>Tracking</li>
                  <li className="flex gap-4 font-bold text-4xl items-center"><span className='font-normal text-xl'>Plans</span>/</li>
                  <li>Workout</li>
                  <li className="flex gap-4 font-bold text-4xl items-center"><span className='font-normal text-xl'>Plans</span>/</li>
                  <li>Progress</li>
                  <li>Fitness</li>
                  <li>Tracking</li>
                  <li className="flex gap-4 font-bold text-4xl items-center"><span className='font-normal text-xl'>Plans</span>/</li>
                  <li>Workout</li>
                  <li className="flex gap-4 font-bold text-4xl items-center"><span className='font-normal text-xl'>Plans</span>/</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transformation />
      <WhatPeopleSay />
    </div>
  );
};

export default FitnessHub;

