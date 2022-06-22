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
import tip from './images/tipcalculatorapp.png'
import latte from './images/pinklatteapp.png'

function Projects() {
  return (
    <>
      <div id='projects' className='h-screen  mt-96 md:mt-28 flex items-center '>
        <section className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 '>
          <div className='text-center pb-12'>
            <h1 className=' lg:font-heroh2 font-heroh1  font-bold text-6xl  mb-5 lg:mb-0 md:text-4xl font-heading '>
              Projects so far...
            </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer '>
            <a target='_blank' href=''>
              <div className='w-full bg-white dark:bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-lg hover:shadow-2xl  '>
                <div  >
                  <Image
                    className='object-center object-cover h-auto w-full  '
                    src={tip}
                    alt='tipcalculator'
                 
                  />
                </div>
                <div className='text-center py-8 sm:py-6  '>
                  <p className='text-xl text-gray-700 font-bold mb-2 dark:text-white '>
                    Tip Calculator App
                  </p>
                  <p className='text-base p-4  text-gray-600 font-Lexen mb-2 dark:text-gray-100 '>
                    A Simple Tip Calculator App made with HTML and CSS
                  </p>
                  <div className='flex justify-evenly text-xl '>
                    <SiHtml5 className=' text-red-500 mx-1.5' />
                    <SiCss3 className=' text-blue-500 mx-1.5' />
                  </div>
                </div>
              </div>
            </a>

            <a target='_blank' href='https://pinkcoffeeapp.netlify.app/#home'>
              <div className='w-full bg-white dark:bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center shadow-lg hover:shadow-2xl  '>
                <div className='' >
                  <Image
                  height={"360px"}
                  width={"320px"}
                    className='object-center object-cover w-80 h-64'
                    src={latte}
                    alt='latte'
                 
                  />
                </div>
                <div className='text-center py-8 sm:py-6  '>
                  <p className='text-xl text-gray-700 font-bold mb-2 dark:text-white '>
                    Pink Latte App
                  </p>
                  <p className='text-base p-4  text-gray-600 font-Lexen mb-2 dark:text-gray-100 '>
                    A Simple Dessert Landing Page made with HTML CSS SCSS and Javascript
                  </p>
                  <div className='flex justify-evenly text-xl '>
                    <SiHtml5 className=' text-red-500 mx-1.5' />
                    <SiCss3 className=' text-blue-500 mx-1.5' />
                    <SiJavascript className=' text-yellow-500 mx-1.5' />
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
