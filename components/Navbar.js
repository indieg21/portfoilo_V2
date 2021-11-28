import React, { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { animateScroll as scroll, Link } from 'react-scroll';

function Navbar() {
  const [scrollNav, setSetScrollNav] = useState(false);
  const [theme, setTheme] = useState('light');

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setSetScrollNav(true);
    } else {
      setSetScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.getElementsByTagName('html')[0].classList.remove('light');
      document.getElementsByTagName('html')[0].classList.add('dark');
      setTheme('dark');
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark');
      document.getElementsByTagName('html')[0].classList.add('light');
      setTheme('light');
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === 'light') {
      document.getElementsByTagName('html')[0].classList.remove('light');
      document.getElementsByTagName('html')[0].classList.add('dark');
      setTheme('dark');
      localStorage.theme = 'dark';
    } else {
      setTheme('light');
      localStorage.theme = 'light';
      document.getElementsByTagName('html')[0].classList.remove('dark');
      document.getElementsByTagName('html')[0].classList.add('light');
    }
  }

  return (
    <>
      <nav
        className={` dark:bg-gray-800 h-20 w-full  fixed z-30 flex items-center bg-white ${
          scrollNav && theme === 'light' ? `border-b-2 border-gray-200 ` : ``
        }`}
      >
        <div className='w-10/12 flex justify-between mx-auto items-center dark:text-white'>
          <div
            id='logo'
            onClick={scroll.scrollToTop}
            className='text-3xl font-bold cursor-pointer font-heroh2 tracking-wider'
          >
            Riz
          </div>

          <ul id='nav-items' className='md:flex font-navbar_items '>
            <Link to='about' smooth={true} duration={400}>
              <li className='text-xl font-navbar_items mr-4 cursor-pointer hidden md:block  '>
                About me
              </li>
            </Link>
            <Link to='projects' smooth={true} duration={400}>
              <li className='text-xl font-navbar_items mr-4 cursor-pointer hidden md:block '>
                Projects
              </li>
            </Link>
            <Link to='contact' smooth={true} duration={400}>
              <li className='text-xl font-navbar_items mr-4 cursor-pointer hidden md:block  '>
                Contact
              </li>
            </Link>
            <button
              onClick={toggleTheme}
              className='text-3xl text-black ml-4 dark:text-white '
            >
              {theme === 'dark' ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
