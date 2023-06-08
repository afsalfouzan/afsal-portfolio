import React from 'react'
import Image from 'next/image'
import css from '../public/assets/skills/css.png'
import github from '../public/assets/skills/github1.png'
import javascript from '../public/assets/skills/javascript.png'
import mongo from '../public/assets/skills/mongo.png'
import nextjs from '../public/assets/skills/nextjs.png'
import node from '../public/assets/skills/node.png'
import react from '../public/assets/skills/react.png'
import tailwind from '../public/assets/skills/tailwind.png'
import sql from '../public/assets/skills/sql.png'
import Terraform from '../public/assets/skills/terraform.png'
import html from '../public/assets/skills/html.png'
import gitlab from '../public/assets/skills/gitlab.png'


function Skills() {
    return (
        <div id='skills'>
            <div className='w-full  lg:h-screen p-2'>
                <div className='max-w-[1240px] flex flex-col justify-center mx-auto h-full'>
                    <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
                    <h2 className='py-4'>What I can do</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-4 gap-8 justify-center items-center'>

                        <div className='shadow-xl p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={css} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>CSS</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2  justify-center'>
                                <Image src={html} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans  text-xl'>HTML</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2  justify-center'>
                                <Image src={javascript} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>javascript</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2  justify-center'>
                                <Image src={sql} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>Mysql</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={mongo} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>mongoDB</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={tailwind} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>tailwindcss</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={nextjs} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>Nextjs</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={node} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>nodejs</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={Terraform} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>terraform</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={react} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>reactjs</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={github} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>github</p>
                            </div>
                        </div>

                        <div className='grid shadow-xl border-4 p-6 rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-300'>
                            <div className='flex items-center gap-2 justify-center'>
                                <Image src={gitlab} alt='/' width='64px' height='64px' />
                                <p className='uppercase font-sans text-xl'>gitlab</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills