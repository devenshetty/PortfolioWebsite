import React, { useState } from "react";
import { FaBars, FaTimes,   FaGithub, FaLinkedin,FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';


function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return <div className="fixed w-full h-[70px] flex justify-between items-center px-4 bg-[#243A73] text-white">
      <div>
      <p className="pl-3.5 italic text-7xl"> </p>
      </div>
      <div className="hidden md:flex">
        <ul className="flex">
          <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500}>About</Link></li>
          <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>

        </ul>
      </div>

      {/*Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile*/}
      <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#839AA8] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
      </ul>

      {/*Social Media*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
       <ul>
         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
           <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.linkedin.com/in/deven-shetty/' target="_blank"
           >
            Linkedin <FaLinkedin size={30} />
           </a>
         </li>
         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
           <a
             className='flex justify-between items-center w-full text-gray-300'
             href='https://github.com/devenshetty?tab=repositories' target="_blank"
           >
             Github <FaGithub size={30} />
           </a>
         </li>
         <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#DB4437]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href="mailto: devenshetty123@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1Ry2YHvSRLRbiLV0P24qgusUbDOInak5q/view?usp=sharing' target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

  </div>
}

export default Navbar;
