import React, { useState } from 'react';

//DOC IMPORT
import cv from '../assets/cv.pdf'
//IMAGES IMPORT-NAV
import logo from '../assets/logo.png'
import me from "../assets/me.png"
//WORK WITH THE LIKES OF
import pbwebcraft from '../assets/pbwebcraft.png';
import skymentor from '../assets/skymentor.png';
//PROJECTS
import project1 from '../assets/project-previews/brew-baken-bites.png';
import project2 from '../assets/project-previews/learn-vista.png';
import project3 from '../assets/project-previews/krushi-kendra.png';

//SWIPPER IMPORTS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import { TypeAnimation } from 'react-type-animation';

//ICONS IMPORT
import { MdPreview, MdOutlineMarkEmailUnread, MdCall } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaArrowUpRightFromSquare, FaUpRightFromSquare } from "react-icons/fa6";
import { TiHtml5 } from "react-icons/ti";

const projectLinks = [
    { preview: "https://example.com/brew-baken-bites", visit: "https://example.com/brew-baken-bites" },
    { preview: "https://example.com/learn-vista", visit: "https://example.com/learn-vista" },
    { preview: "https://example.com/krushi-kendra", visit: "https://example.com/krushi-kendra" }
];

const projectImages = [project1, project2, project3];
const Home = () => {

    const [showTooltip, setShowTooltip] = useState({});

    const handleMouseEnter = (index, type) => {
        setShowTooltip({ ...showTooltip, [`${index}-${type}`]: true });
    };

    const handleMouseLeave = (index, type) => {
        setShowTooltip({ ...showTooltip, [`${index}-${type}`]: false });
    };
    const skills = [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
        { name: 'Canva', level: 70 },
        { name: 'Figma', level: 65 },
        { name: 'Bootstrap', level: 75 },
        { name: 'Tailwind CSS', level: 80 },
    ];

    return (
        <>
            <main className='bg-neutral-900 '>

                {/* NAV SECTION START */}
                <nav className='flex justify-between items-center mx-4 pt-4'>
                    <img src={logo} alt="logo" className='h-10 md:h-12 lg:h-16' />


                    <div className=" relative group px-7">
                        <img
                            alt=""
                            src={me}
                            className="h-8 md:h-10 lg:h-12 rounded-full ring-2 ring-white"
                        />
                    </div>
                </nav>
                {/* NAV SECTION END */}

                {/* HERO SECTION START */}
                {/* Placeholder for Navbar */}
                <div className="flex flex-col items-center justify-center text-white my-5 mx-auto px-4 ">
                    {/* section one */}
                    <section className='block max-h-full max-w-full md:max-w-full lg:max-w-full xl:max-w-full px-4'>
                        {/* Image Container */}
                        <div className="flex justify-center">
                            <img
                                className="w-40 sm:w-60 md:w-80 lg:w-96 xl:w-120 h-auto opacity-75"
                                src={me}
                                alt="Piyush Falke"
                            />
                        </div>

                        {/* Name Container */}
                        <div className="w-full h-auto bg-neutral-950 rounded-t-3xl rounded-b-3xl shadow-gradient-red-blue mx-auto">
                            <h1 className="flex items-center justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl opacity-90 text-shadow-custom bg-gradient-to-r from-red-600 via-red-100 to-red-950 text-transparent bg-clip-text">
                                Piyush Falke
                            </h1>
                            <p className='text-center mt-2'>
                                <TypeAnimation
                                    sequence={[
                                        'Full-stack Web Developer', // Types 'Full-stack Web Developer'
                                        1000, // Waits 1 second
                                        'Mern-stack Web Developer', // Deletes and types 'Mern-stack Web Developer'
                                        2000, // Waits 2 seconds
                                        () => {
                                            console.log('Sequence completed');
                                        },
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    style={{
                                        fontSize: '1.2rem',
                                        display: 'inline-block',
                                        paddingTop: '0.5em',
                                        fontFamily: 'kalnia, serif',
                                    }}
                                    className="text-gradient-my"
                                />
                            </p>
                        </div>

                        {/* Buttons Container */}
                        <div className="text-center mt-10 mb-20 flex flex-wrap justify-center gap-4">
                            <a
                                href={cv} download={cv}
                                className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent border font-bold hover:bg-gradient-to-r from-red-600 to-red-950 hover:text-white hover:border-black rounded-full transition shadow-md shadow-white text-sm sm:text-base"
                            >
                                Download CV ⬇
                            </a>
                            <a
                                href="tel:+918421033369"
                                className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent border font-bold hover:bg-gradient-to-r from-red-600 to-red-950 hover:text-white hover:border-black rounded-full transition shadow-md shadow-white flex items-center text-sm sm:text-base"
                            >
                                <MdCall className="mr-2 text-lg sm:text-xl" /> Contact Me
                            </a>
                        </div>
                        {/* HERO SECTION END */}

                        {/* SWIPER SECTION START */}
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
                            className="mySwiper max-h-96 max-w-full sm:h-72 md:h-80 lg:h-96"
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                        >
                            <SwiperSlide>
                                <div className="w-full xl:h-80 bg-neutral-800 shadow-lg shadow-red-600 flex flex-col md:flex-row p-2 md:p-6">
                                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 w-full text-justify p-4 font-kalnia">
                                        Hi I'm Piyush, a MERN & Full-stack web developer based in India.
                                    </h1>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 w-full text-justify p-4 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text">
                                        Full stack web development is like building a skyscraper from the ground up. You lay the foundation with frontend technologies, stack floors of backend logic, and wire it all together to create a towering digital masterpiece. 🖥️
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="w-full h-96 sm:h-80 bg-neutral-800 shadow-lg shadow-red-600 flex flex-col md:flex-row p-4 md:p-6">
                                    <h1 className="text-base sm:text-lg md:text-6xl lg:text-2xl mt-2 w-full text-justify p-4 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text">
                                        I often work with:
                                    </h1>
                                    <ul className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 w-full text-justify space-y-4">
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
                                <div className="w-full bg-neutral-800 h-96 sm:h-72 md:h-80 lg:h-96 shadow-lg shadow-red-600 flex flex-col md:flex-row p-4 md:p-6 items-center">
                                    <h1 className="text-base sm:text-xl md:text-5xl lg:text-2xl mt-2 text-justify p-4 w-full md:w-6/12 bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text">
                                        I've worked with the likes of:
                                    </h1>
                                    <div className="flex w-full md:w-6/12 mt-4 md:mt-0 justify-center">
                                        <ul className='flex flex-wrap justify-center w-full gap-4'>
                                            <li className='h-28 sm:h-32 bg-gradient-to-r from-red-600 to-red-950 items-center p-4 rounded-lg flex text-lg sm:text-xl md:w-auto'>
                                                <img src={pbwebcraft} alt="pbwebcraft" className='w-full h-auto' />
                                            </li>
                                            <li className='h-28 sm:h-32 bg-gradient-to-r from-red-600 to-red-950 items-center p-4 rounded-lg flex text-lg sm:text-xl md:w-auto'>
                                                <img src={skymentor} alt="skymentor" className='w-full h-auto' />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        {/* SWIPER SECTION END */}

                        {/* SKILLS SECTION START */}
                        <div className="flex justify-center items-center min-h-screen">
                            <div className="max-w-9xl w-full">
                                <h2 className="text-7xl font-bold text-center bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text mb-20 mt-60">My Skills</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-28">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="flex flex-col">
                                            <div className="flex justify-between mb-8 mt-4">
                                                <TiHtml5 />

                                                <span className="text-lg font-medium text-white">{skill.name}</span>
                                                <span className="text-sm font-medium text-neutral-500">{skill.level}%</span>
                                            </div>
                                            <div className="w-full bg-white h-8 shadow-2xl">
                                                <div
                                                    className="bg-gradient-to-r from-red-600 to-red-950 h-8 shadow-2xl"
                                                    style={{ width: `${skill.level}%`, transition: 'width 1s' }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* SKILLS SECTION END */}

                        {/* PROJECTS SWIPPER SECTION START */}
                        <h2 className="text-6xl font-bold text-center bg-gradient-to-r from-slate-300 via-slate-100 to-slate-500 text-transparent bg-clip-text mt-28 mb-28">Projects</h2>
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper w-full h-40 sm:h-96 lg:w-6/12 bg-no-repeat"
                        >
                            {projectImages.map((image, index) => (
                                <SwiperSlide key={index} className="relative group overflow-hidden rounded-xl">
                                    <div className="relative w-full h-full">
                                        <img
                                            src={image}
                                            alt={`project-${index}`}
                                            className="w-full h-full object-contain"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50">
                                            <div className="flex space-x-4">
                                                {/* Preview Icon */}
                                                <div className="relative group">
                                                    <a
                                                        href={projectLinks[index].preview}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onMouseEnter={() => handleMouseEnter(index, 'preview')}
                                                        onMouseLeave={() => handleMouseLeave(index, 'preview')}
                                                        className="relative flex items-center justify-center text-white rounded hover:bg-opacity-75 transition-opacity"
                                                    >
                                                        <MdPreview className="text-5xl text-white hover:text-yellow-400" />
                                                        {showTooltip[`${index}-preview`] && (
                                                            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-md animate-fade-in">
                                                                Preview
                                                            </div>
                                                        )}
                                                    </a>
                                                </div>

                                                {/* Visit Icon */}
                                                <div className="relative group">
                                                    <a
                                                        href={projectLinks[index].visit}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onMouseEnter={() => handleMouseEnter(index, 'visit')}
                                                        onMouseLeave={() => handleMouseLeave(index, 'visit')}
                                                        className="relative flex items-center justify-center text-white rounded hover:bg-opacity-75 transition-opacity"
                                                    >
                                                        <FaGithubSquare className="text-5xl text-white hover:text-yellow-400" />
                                                        {showTooltip[`${index}-visit`] && (
                                                            <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-md animate-fade-in">
                                                                GitHub
                                                            </div>
                                                        )}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* PROJECTS SWIPPER SECTION START */}

                        {/* GET IN TOUCH SECTION START */}
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
                        {/* GET IN TOUCH SECTION END */}
                    </section>
                </div>
            </main>
        </>
    )
}

const Hero = () => {
    return (
        <>

        </>
    )
}
export default Home
