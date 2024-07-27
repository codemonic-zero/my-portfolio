import React from 'react';
import { TiHtml5 } from "react-icons/ti";


export function Skills() {


  return (
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
  );
}
