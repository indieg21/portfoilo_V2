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
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="rizwank" data-description="Support me on Buy me a coffee!" data-message="" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </div>
    </>
  );
}

export default index;
