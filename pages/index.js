import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

function index() {
  const [mobilescreen, setmobilescreen] = useState(null);
  useEffect(() => {
    setmobilescreen(window.screen.width);
    console.log(window.screen.width);
  }, [mobilescreen]);

  return (
    <>
      <div className=' dark:text-white dark:bg-gray-800 '>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default index;
