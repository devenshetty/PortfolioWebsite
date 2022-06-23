import React from "react";
import Python from "../images/python.png";
import Database from "../images/sql.png";
import Tableau from "../images/tableau.png";
import Statistics from "../images/statistics.png";
import ML from "../images/ml.png";
import Excel from "../images/excel.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import Javascript from "../images/javascript.png";
import Reactjs from "../images/react.png";


function Skills(){
  return <div name="test">
  <div name='skills' className='w-full h-screen bg-[#F9F9F9] text-gray-300 pt-60' >

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
          <div>
              <p className='text-4xl text-gray-600 font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'></p>
          </div>

          <div className='w-full grid grid-cols-2 bg-[#371B58] px-20  sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Python} alt="Python icon" />
                  <p className='my-4'>Python</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Database} alt="Database icon" />
                  <p className='my-4'>SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Tableau} alt="Tableau icon" />
                  <p className='my-4'>Tableau</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Statistics} alt="Statistics icon" />
                  <p className='my-4'>Statistics</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ML} alt="Machine Learning icon" />
                  <p className='my-4'>Machine Learning</p>
              </div>
              {// <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              //     <img className='w-20 mx-auto' src={Excel} alt="Excel icon" />
              //     <p className='my-4'>Excel</p>
              // </div>
            }
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
            {  // <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              //     <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
              //     <p className='my-4'>CSS</p>
              // </div>
            }
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Javascript} alt="JavaScript icon" />
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Reactjs} alt="React icon" />
                  <p className='my-4'>React</p>
              </div>

          </div>
      </div>
    </div>
    </div>
}

export default Skills;
