import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image from 'next/image';
import Picture from '../public/assets/picture.png'

const Main = () => {
  return (
    <div id='home' className='w-full md:h-screen text-center'>
      <div className='max-w-[1240px] m-auto md:flex justify-between items-center pt-32 p-4'>

        <div className=' w-full h-full mx-auto p-2 flex justify-center'>
          <div>
            <p className='uppercase text-sm tracking-widest text-gray-600'>
              LET&#39;S BUILD SOMETHING TOGETHER
            </p>
            <div className="">
              <h1 className='py-4 text-gray-700 '>
                Hi, I&#39;m <span className='text-[#5651e5]'> Afsal</span>
              </h1>
              <h1 className='py-2 text-gray-700'>A Full-Stack Developer</h1>
              <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                I’m proficient in both front-end and back-end development, with experience in creating dynamic and scalable web applications.
              </p>
            </div>

            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <a
                href='https://www.linkedin.com/in/afsal-fouzan-609236165/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/afsalfouzan'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <Link href='/#contact'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href='/resume'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <BsFillPersonLinesFill />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className='h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src={Picture} alt='/' width='600' height='900' />
        </div>
      </div>
    </div>
  );
};

export default Main;