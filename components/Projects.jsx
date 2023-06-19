import React from 'react'
import netflixImg from '../public/assets/projects/netflix.jpg'
import ProjectItem from './projectItem'



function Projects() {
    return (
        <div id='projects' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] mx-auto px-2 py-28'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I&apos;ve Built</h2>
                <div className='grid md:grid-cols-2 gap-2'>
                    <ProjectItem
                        title='Netflix App'
                        backgroundImg={netflixImg}
                        projectUrl='/netflix'
                        tech='React JS'
                    />
                </div>

            </div>
        </div>
    )
}

export default Projects