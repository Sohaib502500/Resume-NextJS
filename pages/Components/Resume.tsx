import React from "react";
import "./Resume.css";

import AboutMe from './AboutMe';

export default function Resume() {
  return (
    <div className="border-x-transparent bg-white w-full h-screen mx-0 my-0">
      <button className="relative group float-right right-5">
        <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
          <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
            <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
            <div className="bg-white h-[1px] rounded"></div>
            <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
          </div>
        </div>
      </button>
      <div className="bg-white mx-auto p-10 border-blue rounded-3xl border-[3px] shadow-2xl w-[30rem] h-[42rem] flex-row flex-shrink-0 border-[#0ea5e9] mt-11 mb-10">
        <img
          className="h-[150px] w-[150px] rounded-full"
          src="/Resources/profileSohaib.png"
          alt="Profile"
        ></img>
        <div className="left-0 text-slate-900 text-xl font-thin mx-0 mt-7 text-left">
          Hi, My name is
        </div>
        <div className="left-0 text-[#0ea5e9] font-extrabold text-6xl mx-0 my-0 text-left">
          Sohaib Basit
        </div>
        <div className="left-0 text-slate-900 text-2xl font-thin bg-yellow-200 mx-0 my-5 text-left">
          I love building software products
        </div>
        <div className="left-0 text-slate-900 text-[18px] font-thin mx-0 my-5 text-left">
          I’m a software engineer and building software products is my jam!
          Whether it’s for a startup or a big fancy enterprise, I love taking on
          the challenge of creating solutions that tackle real-world problems.
        </div>
        <div className="left-0 text-slate-900 text-[18px] font-thin mx-0 my-5 text-left">
          I have the experience of building Mobile Apps
        </div>
        <div className="h-[3rem] w-full bg-white border-t-[1px] mb-0 mt-10 flex">
          <div className="text-slate-900 text-[18px] font-thin mt-4">
            @me on
          </div>
          <button className="relative group h-6 w-6 ml-2 mt-4">
            <img
              className="h-full w-full "
              src="/Resources/linkedin.png"
              alt="LinkedIn"
            ></img>
          </button>
          <button className="relative group h-6 w-6 ml-4 mt-4">
            <img
              className="h-full w-full "
              src="/Resources/github.png"
              alt="GitHub"
            ></img>
          </button>
          <button className="relative group h-6 w-6 ml-4 mt-4">
            <img
              className="h-full w-full"
              src="/Resources/stackoverflow.png"
              alt="StackOverFlow"
            ></img>
          </button>
        </div>
      </div>
      <AboutMe></AboutMe>
    </div>
  );
}


