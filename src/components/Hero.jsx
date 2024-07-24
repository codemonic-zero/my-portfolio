'use client';
import { TypeAnimation } from 'react-type-animation';
import MyProfile from '../assets/me.png';
import '../index.css';  // Ensure the path is correct
import { FaUpRightFromSquare } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      {/* Placeholder for Navbar */}

      <div className="flex flex-col items-center justify-center text-white mb-28 mx-auto px-4">
        {/* section one */}
        <section className='block max-w-7xl mx-auto'>
          {/* Image Container */}
          <div className="block">
            {/* Ensure z-index for overlap */}
            <img
              className="w-60 h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto left-1/2 opacity-75"
              src={MyProfile}
              alt="Piyush Falke"
            />
          </div>

          {/* Name Container */}
          <div className="w-full h-64 bg-neutral-950 rounded-t-3xl rounded-b-3xl shadow-gradient-red-blue mx-auto">
            <h1 className="flex items-center justify-center text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-10xl font-bold text-red-900 opacity-90 text-shadow-custom">
              Piyush Falke
            </h1>
          </div>

          <div className="text-center my-4">
            <p>
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
                  fontSize: '2em',
                  display: 'inline-block',
                  paddingTop: '0.5em',
                  fontFamily: 'kalnia, serif', // Use the class defined in tailwind.config.js
                }}
                className="text-gradient-my"
              />
            </p>
            <button
              type="button"
              className="my-4 px-4 py-2 bg-transparent border font-bold hover:bg-white hover:text-black hover:border-black rounded-full transition shadow-md shadow-white"
            >
              Download CV ⬇
            </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              type="button"
              className="my-4 px-4 py-2 bg-transparent border font-bold hover:bg-white hover:text-black hover:border-black rounded-full transition shadow-md shadow-white"
            >
              Get in touch →
            </button>
          </div>
          <div className="w-full bg-neutral-800 h-80 shadow-lg shadow-red-600 flex p-5 my-20">
            <h1 className="text-lg md:text-5xl mt-2 w-full text-justify p-6 font-kalnia">
              Hi I'm Piyush, a MERN & Full-stack web developer based in India.
            </h1>
            <p className="text-lg md:text-xl mt-2 w-full text-justify p-8">
              Full stack web development is like building a skyscraper from the ground up. You lay the foundation with frontend technologies, stack floors of backend logic, and wire it all together to create a towering digital masterpiece. 🖥️
            </p>
          </div>
          <div className="w-full bg-neutral-800 h-72 shadow-lg shadow-red-600 flex p-5 my-20">
            <h1 className="text-lg md:text-5xl mt-2 w-full text-justify p-20">
              I often work with:
            </h1>
            <p className="text-lg md:text-xl mt-2 w-full text-justify">
              <ul>
                <li className='h-24 bg-neutral-950 p-8 rounded-lg flex text-4xl px-8'>
                  <FaUpRightFromSquare />&nbsp;&nbsp;&nbsp;&nbsp;
                  Startups
                </li>
                <p className='py-4'></p>
                <li className='h-24 bg-neutral-950 p-8 rounded-lg flex text-4xl'>
                  <FaUpRightFromSquare />&nbsp;&nbsp;&nbsp;&nbsp;
                  Marketing Teams
                </li>
              </ul>
            </p>
          </div>
          <div className="w-full bg-neutral-800 h-72 shadow-lg shadow-red-600 flex p-5 my-20">
            <h1 className="text-lg md:text-5xl mt-2 w-6/12 text-justify p-8">
              I've worked with the likes of:
            </h1>
            <p className="text-lg md:text-xl mt-2 w-full text-justify">
              <ul className='flex'>
                <li className='h-24 bg-neutral-950 p-8 rounded-lg flex text-4xl mx-4 m w-1/2'>
                  <FaUpRightFromSquare />&nbsp;&nbsp;
                  Startups
                </li>
                <p className='py-4'></p>
                <li className='h-24 bg-neutral-950 p-8 rounded-lg flex text-4xl mx-4 w-1/2'>
                  <FaUpRightFromSquare />&nbsp;&nbsp;
                  Marketing Teams
                </li>
              </ul>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
