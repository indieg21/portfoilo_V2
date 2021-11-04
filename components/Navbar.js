import React from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
function Navbar() {
  return (
    <>
      <nav className='h-20 flex items-center bg-white border-b-2 border-gray-200'>
        <div className='w-10/12 flex justify-between mx-auto items-center'>
          <div
            id='logo'
            className='text-3xl font-bold font-heroh2 tracking-wider'
          >
            Riz
          </div>
          <ul id='nav-items' className='flex font-navbar_items '>
            <li className='text-2xl font-semibold mr-4  '>About me</li>
            <li className='text-2xl font-semibold mr-4 '>Projects</li>
            <li className='text-2xl font-semibold mr-4 '>Contact</li>
            <button className='text-3xl text-black ml-4 '>
              <MdDarkMode />
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
