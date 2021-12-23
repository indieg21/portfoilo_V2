import Aboutsvg from './Svgs/About.svg';

function About() {
  return (
    <>
      <div
        id='about'
        className='lg:h-section h-section flex items-center mt-48 md:mt-0   w-11/12 mx-auto'
      >
        <div className='xl:grid xl:grid-cols-2  '>
          <Aboutsvg className='hidden xl:block md:scale-90  ' />
          <div className='flex justify-center'>
            <div className=''>
              <h1 className='text-6xl font-bold font-heroh1 lg:mt-8  '>
                About Me
              </h1>
              <article className='flex flex-col'>
                <p className=' text-4xl md:text-5xl font-bold font-heroh2 lg:mt-12 mt-32 pb-10'>
                  I'm a 3rd year BCA student based on Bangalore, India.
                </p>
                <p className=' text-4xl md:text-5xl font-bold font-heroh2 lg:mt-12 mt-32 pb-10'>
                  I'm passionate about Web designing and development.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
