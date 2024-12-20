import React,{useState} from 'react'
import blog1 from '/blog/blog2.jpg'
import blog2 from '/blog/blog11.jpg'
import blog3 from '/blog/blog13.jpg'
import pple1 from '/hero/pple-2.png'
import pple2 from '/hero/pple-1.png'
import pple3 from '/hero/pple-3.png'
import question from '/blog/Question.png'
import { FaRegCalendar,FaPlus } from "react-icons/fa";

const Blog = () => {

      const [openIndex, setOpenIndex] = useState(null);

      const faqs = [
          {
              question: `How do i log my workouts?`,
              icon:'+',
              answer: `You can easily loy your workout by selecting the exercise, entering the duration, and tracking your steps`
          },
          {
              question: `can I track my calories burned?`,
              icon:'+',
              answer: `Yes, you can track calories burned through the application integrated tracking features` },
          {
              question: `Is This application for beginners?`,
              icon:'+',
              answer: `Absolutely GymFluencer is designed to be user-friendly and suitable for all fitness levels.`},
          {
              question: `What feature does the application offer?`,
              icon:'+',
              answer: `The app offers workout logging, rep counting, calorie tracking and progress reviews.` },
          {
              question: `How can i reset my password?`,
              icon:'+',
              answer: `You can reset your password by going to the login screen and selecting 'Foget Password.` }
      ];
  
      const handleToggle = (index) => {
          setOpenIndex(openIndex === index ? null : index);
      };
  return (
    <div id='blog'>

        {/* Latetst Blogs */}
        <div className='py-16 px-10'>
            <div>
                <h1 className='text-4xl lg:text-6xl text-center font-bold mb-6 text-red-600'>Our Latest Blogs</h1>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 my-10'>
                <div className="relative">
                    <img src={blog1} alt="images" className="w-full h-[300px] md:h-[400px] lg:h-auto object-cover" />
                    <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-6 sm:p-4 md:p-8 lg:p-10">
                        <div className="flex flex-col justify-start gap-4">
                        <p className="bg-red-600 px-4 py-2 w-fit text-sm md:text-lg lg:text-xl">Exercise</p>
                        <h1 className="text-lg md:text-2xl lg:text-4xl font-bold">
                            Conquering Consistency: How to Make Exercise a Habit You Love
                        </h1>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-5 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                            <FaRegCalendar className="text-gray-300" />
                            <p>June 28, 2024</p>
                            </div>
                            <span className="hidden sm:block">|</span>
                            <div className="flex items-center gap-2">
                            <img src={pple1} alt="Benjamin" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                            <p>Benjamin</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='space-y-9'>
                    <div className='relative'>
                        <img src={blog2} alt="image" className='w-full h-[300px] md:h-[400px] lg:w-[840px] lg:h-auto'/>
                        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-6">
                        <div className="flex flex-col justify-start gap-2">
                        <p className="bg-red-600 px-4 py-2 w-fit text-sm">Weight loss</p>
                        <h1 className="text-lg font-bold">
                            Weight Loss: A systainable Approach for a healther you
                        </h1>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-5 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                            <FaRegCalendar className="text-gray-300" />
                            <p>June 28, 2024</p>
                            </div>
                            <span className="hidden sm:block">|</span>
                            <div className="flex items-center gap-2">
                            <img src={pple2} alt="Benjamin" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                            <p>jessica</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className='relative'>
                        <img src={blog3} alt="image" className='w-full h-[300px] md:h-[400px] lg:w-[840px] lg:h-auto'/>
                        <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full p-6">
                        <div className="flex flex-col justify-start gap-2">
                        <p className="bg-red-600 px-4 py-2 w-fit text-sm">Nutreint</p>
                        <h1 className="text-lg font-bold">
                            Fuel Your Fitness: A Guide To Nutrition For Peak PerformanceConquering
                        </h1>
                        <div className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-5 text-sm md:text-base">
                            <div className="flex items-center gap-2">
                            <FaRegCalendar className="text-gray-300" />
                            <p>June 28, 2024</p>
                            </div>
                            <span className="hidden sm:block">|</span>
                            <div className="flex items-center gap-2">
                            <img src={pple3} alt="Benjamin" className="w-6 h-6 md:w-8 md:h-8 rounded-full" />
                            <p>David</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Frequently Asked Questions */}
        <div>
            <div className='relative w-full overflow-hidden'>
                <img src={question} alt="Question" className="w-full h-[750px] object-cover" />
                <div className="absolute inset-0 max-w-3xl mx-auto">
                    <h1  className="text-4xl lg:text-6xl text-center pt-16 pb-4 text-white">Frequently <br/>Asked Question</h1>
                    <div className='p-5'>
                        {faqs.map((faq, index) => (
                            <div key={index} className='border border-gray-300 rounded-lg p-4 mb-3'>
                                <div onClick={()=>handleToggle(index)} className='flex items-start gap-3'>
                                    <span className={`transition-transform duration-500 ${openIndex === index ? ' pt-2 rotate-45': 'pt-2 rotate-0'}`}><FaPlus /></span>
                                    <div>
                                        <p className='text-xl font-bold duration-200'>{faq.question}</p>
                                        {openIndex === index && (
                                            <p className='text-base font-bold py-7'>{faq.answer}</p>
                                        )}
                                    </div>
                                </div>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Blog