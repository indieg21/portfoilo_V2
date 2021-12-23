import Image from 'next/image';
import Link from 'next/link';
import { FaReact } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiReact,
  SiStyledcomponents,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiHeroku,
} from 'react-icons/si';
import workflow from './images/workflow.jpg';
import colorgame from './images/colorgame.jpg';
import todo from './images/todo.jpg';
import prev_portfolio from './images/prev_portfolio.jpg';

function Projects() {
  return (
    <>
      <div id='projects' className='h-screen  mt-96 lg:mt-0 flex items-center '>
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 '>
          <div className='text-center pb-12'>
            <h1 className=' lg:font-heroh2 font-heroh1  font-bold text-6xl  mb-5 lg:mb-0 md:text-4xl font-heading '>
              Projects so far...
            </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer '>
            <a target='_blank' href='https://mcolorgame.netlify.app/'>
              <div className='w-full bg-white dark:bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-lg hover:shadow-2xl  '>
                <div>
                  <Image
                    className='object-center object-cover h-auto w-full  '
                    src={colorgame}
                    alt='colorgame'
                  />
                </div>
                <div className='text-center py-8 sm:py-6  '>
                  <p className='text-xl text-gray-700 font-bold mb-2 dark:text-white '>
                    Color Guess Game
                  </p>
                  <p className='text-base  text-gray-600 font-Lexen mb-2 dark:text-gray-100 '>
                    A Simple Colour guessing game based on Vanilla JS
                  </p>
                  <div className='flex justify-evenly text-xl '>
                    <SiHtml5 className=' text-red-500 mx-1.5' />
                    <SiCss3 className=' text-blue-500 mx-1.5' />
                    <SiJavascript className='text-yellow-400  mx-1.5' />
                    <SiNetlify className='text-blue-400  mx-1.5' />
                  </div>
                </div>
              </div>
            </a>
            <a target='_blank' href='https://mtodo-app.herokuapp.com/todo'>
              <div className='w-full bg-white dark:bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-lg hover:shadow-2xl  '>
                <div>
                  <Image
                    className='object-center object-cover h-auto w-full'
                    src={todo}
                    alt='todo'
                  />
                </div>
                <div className='text-center py-8 sm:py-6'>
                  <p className='text-xl text-gray-700 font-bold mb-2 dark:text-white'>
                    Todo App
                  </p>
                  <p className='text-base  text-gray-600 font-Lexen mb-2 dark:text-gray-100 '>
                    A Todo list Site with User Authentication and Authorization
                  </p>
                  <div className='flex justify-evenly text-xl '>
                    <SiReact className=' text-blue-500 mx-1.5' />
                    <SiCss3 className=' text-blue-500 mx-1.5' />
                    <SiMongodb className='text-green-500  mx-1.5' />
                    <SiJsonwebtokens className='text-purple-500  mx-1.5' />
                    <SiHeroku className='text-purple-700  mx-1.5' />
                  </div>
                </div>
              </div>
            </a>
            <a target='_blank' href='https://rizwan-k.netlify.app/'>
              <div className='w-full bg-white dark:bg-gray-900 rounded-lg  overflow-hidden flex flex-col justify-center items-center shadow-lg hover:shadow-2xl dark:shadow-lg  '>
                <div>
                  <Image
                    className='object-center object-cover h-auto w-full'
                    src={prev_portfolio}
                    alt='prev_portfolio'
                  />
                </div>
                <div className='text-center py-8 sm:py-6  '>
                  <p className='text-xl text-gray-700 font-bold mb-2 dark:text-white '>
                    Prev Portfolio
                  </p>
                  <div className='flex justify-evenly text-xl  '>
                    <SiReact className=' text-blue-500 mx-1.5' />
                    <SiStyledcomponents className=' text-yellow-500 text-2xl mx-1.5' />
                    <SiNetlify className='text-blue-400  mx-1.5' />
                  </div>
                </div>
              </div>
            </a>
            <a target='_blank' href='https://work-flow.vercel.app/'>
              <div className='w-full bg-white dark:bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-lg hover:shadow-2xl '>
                <div>
                  <Image
                    className='object-center object-cover h-auto w-full'
                    src={workflow}
                    alt='workflow'
                  />
                </div>
                <div className='text-center py-8 sm:py-6'>
                  <p className='text-xl text-gray-700 font-bold mb-2 dark:text-white'>
                    Work Flow
                  </p>
                  <p className='text-base  text-gray-600 font-Lexen mb-2 dark:text-gray-100 '>
                    A Responsive Notes, Todo, Blogs Site created with Next JS,
                    Tailwind with User Authentication, Authorization and
                    Password Hashing
                  </p>
                  <div className='flex justify-evenly text-xl '>
                    <SiNextdotjs className='mx-1.5' />
                    <SiReact className=' text-blue-500 mx-1.5' />
                    <SiTailwindcss className=' text-blue-400 mx-1.5' />
                    <SiMongodb className='text-green-500  mx-1.5' />
                    <SiJsonwebtokens className='text-purple-500  mx-1.5' />
                    <SiVercel className='text-black dark:text-white  mx-1.5' />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Projects;
