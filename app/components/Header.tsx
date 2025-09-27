"use client"

import React,{useState,useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export const Header = () => {
const [isToggleOpen, setIsToggleOpen] = useState(false);

const handleToggle = () => {
  setIsToggleOpen((prevState) => !prevState);
};

// const handelclick = () => {
//   navigate.push('/Arts');
// } 

    return(
    <>
     <div className='mx-4 sm:mx-8 lg:mx-36'>
      <div className='flex items-center justify-between px-2 py-5'>
        {/* Main Content */}
        <div className='flex items-center'>
          <h6 className='mt-1.5'>
            <Link href='/' className='text-white font-base font-bold text-2xl no-underline'>
              My Portfolio
            </Link>
          </h6>
        </div>

        {/* Desktop Menu */}
          <div className='hidden sm:flex justify-end'>
            <div className='flex gap-6 text-lg font-base'>
              <Link href='#' className='text-white hover:border-b-2 hover:border-purple-500'>Home</Link>
              <Link href='#about' className='text-white hover:border-b-2 hover:border-purple-500'>About me</Link>
              <Link href='#projects' className='text-white hover:border-b-2 hover:border-purple-500'>Projects</Link>
              <Link href='#skills' className='text-white hover:border-b-2 hover:border-purple-500'>Skills</Link>
              <Link href='#experience' className='text-white hover:border-b-2 hover:border-purple-500'>Experience</Link>
              <Link href='#contact' className='text-white hover:border-b-2 hover:border-purple-500'>Contact</Link>
              {/* <Link href='/Arts' className='text-white hover:border-b-2 hover:border-purple-500'>Arts</Link> */}
            </div>
          </div>


          <div className='sm:hidden flex items-center z-50'>
            <button
              onClick={handleToggle}
              className='bg-transparent border-none cursor-pointer outline-none'
            >
              {isToggleOpen ? <IoMdClose size={24} color='white' className=''  /> : <IoMenu size={24} color='white' />}
            </button>
          </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isToggleOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-80  transform transition-transform duration-500 translate-x-0 z-40'>
          <div className='flex flex-col px-4 items-center justify-center h-full space-y-8'>
            <Link href='#' onClick={handleToggle} className='text-white hover:border-b-2 hover:border-purple-500'>Home</Link>
              <Link href='#about' onClick={handleToggle}  className='text-white hover:border-b-2 hover:border-purple-500'>About me</Link>
              <Link href='#projects' onClick={handleToggle}  className='text-white hover:border-b-2 hover:border-purple-500'>Projects</Link>
              <Link href='#skills' onClick={handleToggle}  className='text-white hover:border-b-2 hover:border-purple-500'>Skills</Link>
              <Link href='#experience' onClick={handleToggle}  className='text-white hover:border-b-2 hover:border-purple-500'>Experience</Link>
              <Link href='#contact' onClick={handleToggle}  className='text-white hover:border-b-2 hover:border-purple-500'>Contact</Link>
            {/* <Link href='/Arts' className='text-white p-2 text-center hover:border-b-2 hover:border-purple-500'>Arts</Link> */}
          </div>
        </div>
      )}
    </div>
    </>
    )
}


