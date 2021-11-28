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
      <div className=' h-screen w-10/12 mx-auto   flex flex-col lg:flex-row   '>
        <div className=' h-52 mt-60 lg:mt-72 ml-2 lg:ml-16    '>
          <h1 className='font-heroh1 md:flex justify-center lg:justify-start md:text-5xl mb-4 text-5xl '>
            I'm Rizwan K,
          </h1>
          <p className='font-heroh2 md:flex md:justify-center leading-relaxed md:leading-tight md:text-8xl text-4xl mt-28 md:mt-24   '>
            A Web Developer & Designer
          </p>
        </div>
        <div className='flex lg:flex-col lg:w-20 w-9/12 mx-auto lg:ml-5  cursor-pointer mt-36 md:mt-80  lg:mt-0 '>
          <div className='lg:text-xl text-2xl  my-auto flex flex-row mx-auto   lg:flex-col  '>
            <a target='_blank' href='https://instagram.com'>
              <FaInstagram className='my-8 mx-3.5 hover:scale-150 transition-all hover:text-pink-500' />
            </a>
            <a target='_blank' href='https://twitter.com/riz1_k9'>
              <FaTwitter className='my-8 mx-3.5 hover:scale-150 transition-all hover:text-blue-400' />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/rizwan-k-73b5951b5/'
            >
              <FaLinkedin className='my-8 mx-3.5 hover:scale-150 transition-all hover:text-blue-600' />
            </a>
            <a target='_blank' href='https://github.com/riz1-k'>
              <FaGithub className='my-8 mx-3.5 hover:scale-150 transition-all  hover:text-gray-600' />
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
