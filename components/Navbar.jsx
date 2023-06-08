import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import navLogo from '../public/assets/navLogo.png'

function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const handleNav = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-slate-50'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src={navLogo} alt='/' width='87' height='50' />
        <div className='fixed right-0 px-4'>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 uppercase hover:scale-110 hover:border-b text-blue-800 ease-in duration-300'>Home</li>
            </Link>
            <Link href='/about'>
              <li className='ml-10 uppercase hover:scale-110 hover:border-b text-blue-800 ease-in duration-300'>About</li>
            </Link>
            <Link href='/Skills'>
              <li className='ml-10 uppercase hover:scale-110 hover:border-b  text-blue-800 ease-in duration-300'>Skills</li>
            </Link>
            <Link href='/Projects'>
              <li className='ml-10 uppercase hover:scale-110 hover:border-b text-blue-800 ease-in duration-300'>Projects</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 uppercase hover:scale-110 hover:border-b text-blue-800 ease-in duration-300'>Contacts</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className=' cursor-pointer fixed right-0 md:hidden px-2'>
          <BiMenuAltRight size={30} />
        </div>

        <div className={isOpen ? 'fixed top-0 left-0 h-screen w-full bg-black/70' : ''}>
          <div className={isOpen ? 'fixed top-0 left-0 ease-in duration-500 bg-[#ecf0f3] w-[75%] h-screen sm:w-[45%] md:w-[45%] p-10' :
            'fixed top-0 left-[-120%] ease-in duration-500 bg-[#ecf0f3] h-screen p-10 '}>
            <div>
              <div className='flex justify-between w-full items-center'>
                <Image src={navLogo} alt='/' width='87' height='51' />
                <div onClick={handleNav} className='shadow-blue-300 rounded-full shadow-lg p-3 cursor-pointer '>
                  <AiOutlineClose size={20} />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] font-bold py-4'>Let&apos;s build something legendary together</p>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                  <Link href='/about'>
                    <li className='py-2 text-blue-900 hover:scale-90 text-sm ease-in duration-300 uppercase'>home</li>
                  </Link>
                  <Link href='/'>
                    <li className='py-2 text-blue-900 hover:scale-90 text-sm ease-in duration-300 uppercase'>About</li>
                  </Link>
                  <Link href='/'>
                    <li className='py-2 text-blue-900 hover:scale-90 text-sm ease-in duration-300 uppercase'>skills</li>
                  </Link>
                  <Link href='/'>
                    <li className='py-2 text-blue-900 hover:scale-90 text-sm ease-in duration-300 uppercase'>projects</li>
                  </Link>
                  <Link href='/'>
                    <li className='py-2 text-blue-900 hover:scale-90 text-sm ease-in duration-300 uppercase'>contacts</li>
                  </Link>
                </ul>
              </div>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-blue-500 font-bold'>Let&apos;s Connect</p>
              </div>
              <div className='flex items-center justify-between w-full py-4'>
                <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-gray-400 shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar