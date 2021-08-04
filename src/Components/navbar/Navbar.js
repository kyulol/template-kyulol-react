import React, { useState } from 'react';
import kyulol from '../../assets/images/Logo/kyulol.svg';

export default function Navbar() {

    // open close mobile menu
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const changeMenuState = () => {
      setToggleMobileMenu(!toggleMobileMenu);
    };

  return (
    <>
    {/* 💻 Desktop navbar 💻 */}
    <div className="hidden fixed lg:flex justify-center items-center w-full bg-white h-20">

      <nav className="w-2/5 h-full">
        <ul className="flex justify-end items-center h-full space-x-4">
          <li className="h-full flex items-center">home</li>
          <li className="h-full flex items-center">secondary</li>
          <li className="h-full flex items-center">third</li>
        </ul>
      </nav>

      <img className="w-16 mx-12" src={kyulol} alt="play video"/>

      <nav className="w-2/5 h-full">
        <ul className="flex items-center h-full space-x-4">
          <li className="h-full flex items-center">forth</li>
          <li className="h-full flex items-center">about us</li>
          <li className="h-full flex items-center">contact</li>
        </ul>
      </nav>

    </div>

    {/* 📱 smartphone navbar 📱 */}
    <div className="flex items-center justify-between h-20 lg:hidden px-3">
      <img className="w-14" src={kyulol} alt="play video"/>

      <button onClick={changeMenuState} className={`boxMenu z-40 ${toggleMobileMenu ? 'iconClose' : 'iconMenu'}`}>
          <div className="containerLines pointer-events-none h-5 w-7">
            <div className="lines"></div>
            <div className="lines"></div>
            <div className="lines"></div>
          </div>
        </button>
    </div>

    <div className={`menuMbl ${toggleMobileMenu ? 'menuMblOpen' : 'menuMblClose'}`}>
        <ul className="nav-ul mt-12">

          {/* go to Top games */}
          <li className="nav-li">
            test
          </li>

          <hr className="styleWhite" />

          {/* go to top streamers */}
          <li className="nav-li">
            test 2
          </li>
        </ul>

      </div>
  </>

  )
}
