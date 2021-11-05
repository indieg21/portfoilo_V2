import Aboutsvg from './Svgs/About.svg';

function About() {
  return (
    <>
      <div id='about' className='h-section flex items-center w-11/12 mx-auto'>
        <div className='grid grid-cols-2  '>
          <Aboutsvg className='' />
          <div className='flex justify-center'>
            <div className=''>
              <h1 className='text-6xl font-bold font-heroh1 mt-8'>About Me</h1>
              <p className='text-5xl font-bold font-heroh2 mt-12'>
                I'm a 3rd year BCA student who's passionate about Web designing
                and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
