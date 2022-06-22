import { Link } from 'react-scroll';
import {
  FaArrowDown,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

function Hero() {
  return (
    <>
      <div className=' xl:h-screen h-screen md::h-[120rem] w-10/12 mx-auto mb-96 md:mb-0  flex flex-col md:items-center lg:flex-row   '>
        <div className=' h-52 mt-48 md:mt-10 lg:mt-16 ml-2 lg:ml-16 animate__animated animate__lightSpeedInLeft  '>
          <h1 className='font-heroh1 md:flex justify-center lg:justify-start md:text-5xl mb-4 text-5xl '>
            I'm India G,
          </h1>
          <p className='font-heroh2 md:flex md:justify-center leading-relaxed md:leading-tight md:text-8xl text-4xl mt-28 md:mt-24   '>
            A Web Developer & Designer
          </p>
        </div>
        <div className='flex lg:flex-col lg:w-20 w-9/12 mx-auto lg:ml-5  cursor-pointer mt-48 md:mt-80  lg:mt-0 '>
          <div className='lg:text-xl text-2xl  my-auto flex flex-row mx-auto   lg:flex-col animate__animated animate__flip '>
            <a target='_blank' href=''>
              <FaInstagram className='my-8 mx-3.5 hover:scale-150 transition-all hover:text-pink-500' />
            </a>
            <a target='_blank' href='https://twitter.com/IndieTheTechGi1'>
              <FaTwitter className='my-8 mx-3.5 hover:scale-150 transition-all hover:text-blue-400' />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/india-g-a9046b78/'
            >
              <FaLinkedin className='my-8 mx-3.5 hover:scale-150 transition-all hover:text-blue-600' />
            </a>
            <a target='_blank' href='https://www.github.com/indieg21'>
              <FaGithub className='my-8 mx-3.5 hover:scale-150 transition-all' />
            </a>
          </div>
        </div>
        <div className='lg:hidden text-4xl flex mt-10 justify-center   '>
          <Link to='about' smooth={true} duration={400}>
            <FaArrowDown className='cursor-pointer transition-all hover:scale-110 hover:mt-5 ' />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Hero;
