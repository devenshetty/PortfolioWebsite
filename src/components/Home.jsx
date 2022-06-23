import React from "react";
import { HiArrowNarrowLeft } from 'react-icons/hi';

function Home() {
  return <div name="home" className="w-full h-screen bg-[#F9F9F9]">
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p className='text-gray-500 font-bold'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#371B58]'>
          Deven Shetty
        </h1>
        <h4 className='lg:text-3xl md:text-3xl sm:text-xs  font-bold text-[#8892b0] pt-3.5'>
          Aspiring Data Scientist and Software Developer
        </h4>
        <p className='text-gray-500 py-4 max-w-[700px]'>
        Passionate about finding simple solutions to complex problems.
        </p>
        <div>
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <a href='https://drive.google.com/file/d/14LOJpSkqwnIgiAvLNZZFBzCyCnQJnqyA/view?usp=sharing' target='_blank'>  View my Project Portfolio </a>
            <span className='group-hover:rotate-180 duration-300'>
              <HiArrowNarrowLeft className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
  </div>
}

export default Home;
