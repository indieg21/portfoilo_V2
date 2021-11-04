import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

function Hero() {
  return (
    <>
      <div className=' h-full flex absolute '>
        <div className=' h-52 w-2/3 mt-72 mx-auto relative z-10 '>
          <h1 className='font-heroh1 text-5xl mb-4'>I'm Rizwan K,</h1>
          <p className='font-heroh2 text-9xl'>A Web Developer/Designer</p>
        </div>
        <div className=' flex flex-col w-20 cursor-pointer '>
          <div className='text-xl my-auto '>
            <FaFacebookF className='my-8 hover:text-blue-500' />
            <FaInstagram className='my-8 hover:text-pink-500' />
            <FaTwitter className='my-8 hover:text-blue-400' />
            <FaLinkedin className='my-8 hover:text-blue-600' />
            <FaGithub className='my-8  hover:text-gray-600' />
          </div>
        </div>
      </div>
    </>
  );
}
export default Hero;
