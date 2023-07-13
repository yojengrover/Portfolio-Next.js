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
        <h3 className=' text-2xl py-2'>Frontend Developer</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>Frontend Developer/ Full Stack Developer experienced 
          in designing & developing custom websites based on 
          React/Redux and MERN Stack. </p>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className=' relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'> 
      <Image src={deved} layout="fill" objectFit='cover'/></div>
      </div>
    </section>
    <section>
      <div>
        <h3 className='text-3xl'>Services I offer</h3>
        <p className='text-md py-5 leading-8 text-gray-800'>
        3+ years of experience in front-end development, 
        Innovative and results-driven UI developer with over utilizing React, Redux,
         and MobX for creating dynamic and responsive UI components.
        </p>
      </div>
      <div>
        <div>
          <h4 className='text-lg font-medium pt-8 pb-2'>TechMates</h4>
          <p className='py-2'>Social media website for developers</p>
          <p className='py-2'>Tech Stack: React.JS </p>

        </div>
      </div>
    </section>
    </main>
    </div>
  )
}
