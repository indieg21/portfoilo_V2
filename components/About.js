import Aboutsvg from './Svgs/About.svg';

function About() {
  return (
    <>
      <div
        id='about'
        className='h-screen flex items-center mt-48 md:mt-44  w-11/12 mx-auto '
      >
        <div className='xl:grid xl:grid-cols-2  '>
          <Aboutsvg className='hidden xl:block w-[80%] ' />
          <div className='flex justify-center'>
            <div className=''>
              <h1 className='text-6xl font-bold font-heroh1 lg:mt-8  '>
                About Me
              </h1>
              <article className='flex flex-col'>
                <p className=' text-3xl md:text-5xl font-bold font-heroh2 lg:mt-12 mt-32 pb-10'>
                  I'm a Designer transitioning into Front-end development.
                </p>
                <p className=' text-3xl md:text-5xl font-bold font-heroh2 lg:mt-12 mt-32 pb-10'>
                  I'm passionate about the look of a site. Product Design combined with Front-end development is my focus.
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
