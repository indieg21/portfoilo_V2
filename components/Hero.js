import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Hero() {
  return (
    <>
      <div className=' h-screen flex '>
        <div className=' h-52 w-2/3 mt-72 mx-auto  '>
          <h1 className='font-heroh1 text-5xl mb-4'>I'm Rizwan K,</h1>
          <p className='font-heroh2 text-9xl'>A Web Developer/Designer</p>
        </div>
        <div className=' flex flex-col w-20 cursor-pointer '>
          <div className='text-xl my-auto '>
            <a target='_blank' href='https://instagram.com'>
              <FaInstagram className='my-8 hover:text-pink-500' />
            </a>
            <a target='_blank' href='https://twitter.com/riz1_k9'>
              <FaTwitter className='my-8 hover:text-blue-400' />
            </a>
            <a
              target='_blank'
              href='https://www.linkedin.com/in/rizwan-k-73b5951b5/'
            >
              <FaLinkedin className='my-8 hover:text-blue-600' />
            </a>
            <a target='_blank' href='https://github.com/riz1-k'>
              <FaGithub className='my-8  hover:text-gray-600' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
