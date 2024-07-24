
"use client";
import logo from '../assets/logo.png'
import me from "../assets/me.png"


export function Nav() {
  return (
    <>
      <nav className='flex justify-between items-center mx-4 mt-4 static'>
        <img src={logo} alt="logo" className='h-10 md:h-12 lg:h-16' />


        <div className=" relative group px-7">
          <img
            alt=""
            src={me}
            className="h-8 md:h-10 lg:h-12 rounded-full ring-2 ring-white"
          />
        </div>
      </nav>
    </>
  );
}
