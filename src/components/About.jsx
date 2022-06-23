import React from "react";

function About() {
  return <div name='about' className='w-full h-screen bg-[#F9F9F9] text-gray-600'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Deven, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I have an analytical, detail-oriented mindset with strong communication skills along with a diverse academic background in Math, Science and Technology.
              I enjoy conversations about Product Management, Artificial Intelligence, Data Science, Computer Science, and Engineering. My biggest goal is to bring the future of technology to the people of today.
              </p>
            </div>
          </div>
      </div>
    </div>
}

export default About;
