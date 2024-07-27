'use client';
import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import MyProfile from '../assets/me.png';
import '../style/myinfo.css';  // Ensure the path is correct
import '../style/projects.css';  // Ensure the path is correct
import { FaUpRightFromSquare } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineMarkEmailUnread, MdCall } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
// Import required modules
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
import Projects from './Projects';
import { Skills } from './Skills';

export default function Hero() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>

      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text mt-20 mb-20">About Me</h1>

      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={20}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper my-10 h-60 sm:h-72 md:h-80 lg:h-96"
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
            >
        <SwiperSlide>
          <div className="w-full bg-neutral-800 shadow-lg shadow-red-600 flex flex-col md:flex-row p-4 md:p-6">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 w-full text-justify p-4 font-kalnia">
              Hi I'm Piyush, a MERN & Full-stack web developer based in India.
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 w-full text-justify p-4 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text">
              Full stack web development is like building a skyscraper from the ground up. You lay the foundation with frontend technologies, stack floors of backend logic, and wire it all together to create a towering digital masterpiece. 🖥️
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-neutral-800 shadow-lg shadow-red-600 flex flex-col md:flex-row p-4 md:p-6">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 w-full text-justify p-4 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text">
              I often work with:
            </h1>
            <ul className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 w-full text-justify p-4 space-y-4">
              <li className='h-20 sm:h-24 bg-gradient-to-r from-red-600 to-red-950 p-4 rounded-lg flex items-center text-lg sm:text-xl'>
                <FaUpRightFromSquare className='mr-2 text-base sm:text-xl' />
                Startups
              </li>
              <li className='h-20 sm:h-24 bg-gradient-to-r from-red-600 to-red-950 p-4 rounded-lg flex items-center text-lg sm:text-xl'>
                <FaUpRightFromSquare className='mr-2 text-base sm:text-xl' />
                Marketing Teams
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full bg-neutral-800 h-60 sm:h-72 md:h-80 lg:h-96 shadow-lg shadow-red-600 flex flex-col md:flex-row p-4 md:p-6 items-center">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 text-justify p-4 w-full md:w-6/12 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text">
              I've worked with the likes of:
            </h1>
            <div className="flex w-full md:w-6/12 mt-4 md:mt-0 justify-center">
              <ul className='flex flex-wrap justify-center w-full gap-4'>
                <li className='h-24 sm:h-32 bg-gradient-to-r from-red-600 to-red-950 items-center p-4 rounded-lg flex text-lg sm:text-xl w-1/2 md:w-auto'>
                  <img src={pbwebcraft} alt="pbwebcraft" className='w-full h-auto' />
                </li>
                <li className='h-24 sm:h-32 bg-gradient-to-r from-red-600 to-red-950 items-center p-4 rounded-lg flex text-lg sm:text-xl w-1/2 md:w-auto'>
                  <img src={skymentor} alt="skymentor" className='w-full h-auto' />
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <Skills />
      <Projects />

      <div className='mt-20 mb-40 flex flex-col items-center'>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-center bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text mb-6">Get In Touch</h1>

        <div className='relative flex items-center'>
          <a
            href="mailto:piyushmfalke@gmail.com"
            title='Click to mail'
            className='text-base sm:text-lg md:text-xl font-extrabold bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text mt-4 border py-2 px-4 sm:px-6 rounded-xl flex items-center'
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <MdOutlineMarkEmailUnread className='text-base sm:text-lg md:text-xl mr-2' />
            piyushmfalke@gmail.com
            <FaArrowUpRightFromSquare className='text-base sm:text-lg md:text-xl ml-2' />
          </a>
          {showTooltip && (
            <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-md animate-fade-in">
              Click to mail
            </div>
          )}
        </div>
      </div>
    </>
  );
}
