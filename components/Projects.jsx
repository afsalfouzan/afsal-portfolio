import React from 'react'
import Image from 'next/image'
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'


function Projects() {
    return (
        <div className='w-full '>
            <div className='max-w-[1240px] mx-auto px-2 py-16'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-2'>

                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image src={netflixImg} alt='/'  />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Projects