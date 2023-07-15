import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { Inter } from 'next/font/google'
import deved from '../public/dev-ed-wave.png'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);
  let iconStyles = { color: "white"}
  let iconsBlack = {}

  const downloadResume = () => {
    // using Java Script method to get PDF file
    fetch('Grover_Yojen_FD.Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Grover, Yojen resume.pdf';
            alink.click();
        })
    })
}
  return (
    <div className={darkMode ? "dark":""}>
      <title>Yojen Portfolio</title>
    <main className='bg-white px-10 dark:bg-gray-900' >
    <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between'> 
        <h1 className='text-xl text-gray-900 font-burtons dark:text-white'>Yojen</h1>
        <ul className=' flex items-center'>
          <li>
            <BsFillMoonStarsFill style={darkMode? iconStyles:""} className='cursor-pointer text-2xl' onClick={() => setDarkMode(!darkMode)}/>
          </li>
          <li><a className='bg-gradient-to-r from-teal-600 bg-cyan-600 text-white px-4 py-2 rounded-md ml-8
          ' href='#' onClick={downloadResume}>Resume</a></li>
        </ul>
      </nav>
      <div className=' text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>Yojen Grover</h2>
        <h3 className=' text-2xl py-2 md:text-3xl dark:text-white'>JavaScript/Frontend Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>Frontend Developer/ Full Stack Developer experienced 
          in designing & developing custom websites based on 
          React/Redux and MERN Stack. </p>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <a target="_blank" href='https://www.linkedin.com/in/yojengrover/'><AiFillLinkedin /></a>
        <a target="_blank" href='https://github.com/yojengrover'><AiFillGithub /></a>
      </div>
      <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96 '> 
      <Image src={deved} layout="fill" objectFit='cover'/></div>
      </div>
    </section>
    <section>
      <div>
        <h3 className='text-3xl text-gray-900 text-center dark:text-white'>Professional Summary</h3>
        <p className='text-md py-5 leading-8 text-gray-800 dark:text-cyan-50'>
        <div className="bg-gray-100 p-8 dark:bg-gray-600">
  <h2 className="text-2xl font-bold mb-4">Front-end Development Experience</h2>

  <ul className="list-disc ml-8">
    <li className="mb-2">Innovative and results-driven UI developer with over 3+ years of experience in front-end development.</li>
    <li className="mb-2">Proficient in utilizing React, Redux, and MobX for creating dynamic and responsive UI components.</li>
    <li className="mb-2">Strong understanding of state management, routing, and debugging using React and Chrome development tools.</li>
    <li className="mb-2">Skilled at analyzing and solving browser compatibility challenges.</li>
    <li className="mb-2">Proficiency in building responsive and mobile-optimized websites using Bootstrap and Material UI.</li>
  </ul>

  <h2 className="text-2xl font-bold mt-8 mb-4">Back-end Development Experience</h2>

  <ul className="list-disc ml-8">
    <li className="mb-2">Proficient in back-end development with MongoDB and Node/Express.</li>
    <li className="mb-2">Experienced in utilizing RESTful APIs to integrate data into web applications.</li>
    <li className="mb-2">Skilled in Agile methodology and Scrum framework for efficient and collaborative software development.</li>
  </ul>

  <h2 className="text-2xl font-bold mt-8 mb-4">Other Skills</h2>

  <ul className="list-disc ml-8">
    <li className="mb-2">Adept at using JIRA for requirement gathering.</li>
    <li className="mb-2">Experienced in Test Driven Development using Enzyme, React Testing Library, JEST, and achieving 100% coverage.</li>
    <li className="mb-2">Proficient in using GIT and BITBUCKET for version control.</li>
    <li className="mb-2">Possesses the ability to maintain consistency and well-commented HTML and CSS markup.</li>
  </ul>
</div>

        </p>
      </div >
      <h3 className='text-3xl text-center dark:text-white'>Projects</h3>
      <div className='lg:flex gap-10 dark:text-white'>
        <div className='text-center text-gray-900 shadow-lg p-10 rounded-xl my-10 dark:shadow-white'>
          <h4 className='text-lg font-medium pt-8 pb-2'>TechMates</h4>
          <p className='py-2'>Social media website for developers</p>
          <p className='py-2 text-gray-800 dark:text-cyan-50'><span >Tech Stack:</span> React.JS, MongoDB, Express, Node.js and SCSS</p>
          <p className='py-2 dark:text-cyan-50'><span >GitHub: </span>
          <a className='text-sm text-teal-600 ' href='https://github.com/yojengrover/Portfolio-Next.js'>
            https://github.com/yojengrover/Portfolio-Next.js
            </a> </p>
          <p className='py-2'>Live:<span className='text-teal-700'> NA</span> </p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 text-gray-900 dark:shadow-white'>
          <h4 className='text-lg font-medium pt-8 pb-2'>GasNGo</h4>
          <p className='py-2'>Ride sharing application</p>
          <p className='py-2 dark:text-cyan-50'><span >Tech Stack:</span> React.JS, MongoDB, GraphQl, Node.js, MaterilUI and Bootstrap</p>
          <p className='py-2 dark:text-cyan-50'><span >GitHub: </span>
          <a className='text-sm text-teal-600' href='https://github.com/yojengrover/Portfolio-Next.js'>
            https://github.com/yojengrover/Portfolio-Next.js
            </a> </p>
          <p className='py-2'>Live:<span className='text-teal-700'> NA</span> </p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 text-gray-900 dark:shadow-white'>
          <h4 className='text-lg font-medium pt-8 pb-2'>Portfolio</h4>
          <p className='py-2'>Portfolio website using Next.js and tailwind</p>
          <p className='py-2 dark:text-cyan-50'><span >Tech Stack:</span> Next.JS, JavaScript and tailwind</p>
          <p className='py-2 dark:text-cyan-50'><span >GitHub: </span>
          <a className='text-sm text-teal-600' href='https://github.com/yojengrover/Portfolio-Next.js'>
            https://github.com/yojengrover/Portfolio-Next.js
            </a> </p>
          <p className='py-2'>Live:<span className='text-teal-700'> NA</span> </p>
        </div>
      </div>
    </section>
    </main>
    </div>
  )
}
