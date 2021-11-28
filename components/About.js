import Aboutsvg from './Svgs/About.svg';

function About() {
  return (
    <>
      <div
        id='about'
        className='lg:h-section h-section flex items-center   w-11/12 mx-auto'
      >
        <div className='xl:grid xl:grid-cols-2  '>
          <Aboutsvg className='hidden xl:block  ' />
          <div className='flex justify-center'>
            <div className=''>
              <h1 className='text-6xl font-bold font-heroh1 lg:mt-8'>
                About Me
              </h1>
              <p className='text-5xl font-bold font-heroh2 lg:mt-12 mt-32 pb-10'>
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
