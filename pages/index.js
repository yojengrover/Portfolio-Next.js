import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { Inter } from 'next/font/google'
import deved from '../public/dev-ed-wave.png'
import code from '../public/code.png'
import design from '../public/design.png'
import consulting from '../public/consulting.png'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <title>Yojen Portfolio</title>
    <main className='bg-white px-10'>
    <section className='min-h-screen'>
      <nav className='py-10 mb-12 flex justify-between'> 
        <h1 className='text-xl font-burtons'>Yojen</h1>
        <ul className=' flex items-center'>
          <li>
            <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
          </li>
          <li><a className='bg-gradient-to-r from-cyan-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8
          ' href='#'>Resume</a></li>
        </ul>
      </nav>
      <div className=' text-center p-10'>
        <h2 className='text-5xl py-2 text-teal-600 font-medium'>Yojen Grover</h2>
        <h3 className=' text-2xl py-2 md:text-3xl'>JavaScript/Frontend Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>Frontend Developer/ Full Stack Developer experienced 
          in designing & developing custom websites based on 
          React/Redux and MERN Stack. </p>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'> 
      <Image src={deved} layout="fill" objectFit='cover'/></div>
      </div>
    </section>
    <section>
      <div>
        <h3 className='text-3xl text-center'>Professional Summary</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>
        <div className="bg-gray-100 p-8">
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
      </div>
      <div className='lg:flex gap-10'>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <h4 className='text-lg font-medium pt-8 pb-2'>TechMates</h4>
          <p className='py-2'>Social media website for developers</p>
          <p className='py-2 text-gray-800'><span >Tech Stack:</span> React.JS, MongoDB, Express, Node.js and SCSS</p>
          <p className='py-2 text-gray-800'><span >GitHub: </span>
          <a className='text-teal-600' href='https://github.com/yojengrover/Portfolio-Next.js'>
            https://github.com/yojengrover/Portfolio-Next.js
            </a> </p>
          <p className='py-2'>Live:<span className='text-teal-700'> NA</span> </p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <h4 className='text-lg font-medium pt-8 pb-2'>GasNGo</h4>
          <p className='py-2'>Ride sharing application</p>
          <p className='py-2 text-gray-800'><span >Tech Stack:</span> React.JS, MongoDB, GraphQl, Node.js, MaterilUI and Bootstrap</p>
          <p className='py-2 text-gray-800'><span >GitHub: </span>
          <a className='text-teal-600' href='https://github.com/yojengrover/Portfolio-Next.js'>
            https://github.com/yojengrover/Portfolio-Next.js
            </a> </p>
          <p className='py-2'>Live:<span className='text-teal-700'> NA</span> </p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10'>
          <h4 className='text-lg font-medium pt-8 pb-2'>Portfolio</h4>
          <p className='py-2'>Portfolio website using Next.js and tailwind</p>
          <p className='py-2 text-gray-800'><span >Tech Stack:</span> Next.JS, JavaScript and tailwind</p>
          <p className='py-2 text-gray-800'><span >GitHub: </span>
          <a className='text-teal-600' href='https://github.com/yojengrover/Portfolio-Next.js'>
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
