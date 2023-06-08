import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Afsal | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Afsal Fouzan</h2>
          <div className='flex'>
          <a
                href='https://www.linkedin.com/in/afsal-fouzan-609236165/'
                target='_blank'
                rel='noreferrer'
              >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
                href='https://github.com/afsalfouzan'
                target='_blank'
                rel='noreferrer'
              >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Full Stack Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
           As a modern full-stack developer, I am passionate about creating robust and efficient web applications. With a solid foundation in both front-end and back-end technologies, I thrive in building seamless user experiences and implementing scalable solutions.  I am experienced in working with languages such as JavaScript, HTML, CSS, and frameworks like React and Node.js. Collaborating in cross-functional teams, I leverage my strong problem-solving skills and attention to detail to deliver high-quality code. Continuously learning and adapting to new technologies, I stay up-to-date with industry trends and best practices. With a focus on clean code and optimal performance, I strive to contribute to innovative and impactful projects.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>Back-End Developer
            <span className='px-2'>|</span>HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>MYSQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Nodejs
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> sequelize
            <span className='px-2'>|</span> terraform
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Toobler Technologies private limited
            </span>
            <span className='px-2'>kochi,india</span>
          </p>
          <p className='py-1 italic'>Full-stack developer (2022-March - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed text-justify'>
            <li>
            Full Stack Development: Proficient in both front-end and back-end development, capable of building complete web applications from start to finish.
            </li>
            <li>
            Front-end Expertise: Skilled in creating responsive user interfaces using HTML, CSS, and JavaScript frameworks like React, ensuring intuitive and engaging user experiences.
            </li>
            <li>
            Back-end Proficiency: Experienced in developing server-side logic, RESTful APIs, and database integration using technologies such as Node.js, Express.js, and databases like MongoDB or MySQL.
            </li>
            <li>
            Database Management: Knowledgeable in designing and optimizing database schemas, performing migrations, and implementing data models for efficient data storage and retrieval.
            </li>
            <li>
            Problem Solving and Collaboration: Strong problem-solving abilities, coupled with the ability to collaborate effectively in cross-functional teams, ensuring smooth communication and successful project delivery.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
