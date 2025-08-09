import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../assets/rewired_2_logo.png";

function Navbar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <div className="relative w-full">
      <div className="absolute left-0 top-[95%] bg-red/50 h-[1px] w-screen z-0 "></div>

      <div className="w-full md:w-7/8 flex justify-between right-8 md:right-0 md:ml-24 relative z-10">
        {isDesktop ? <LargeNavbar /> : <SmallNavbar />}
      </div>
    </div>
  );
}

function LargeNavbar() {
  return (
    <BrowserRouter>
      <div>
        <img src={logo} className="m-2 scale-70"></img>
      </div>
      <nav className="justify-around items-center p-4 hidden md:flex">
        <ul className="flex gap-x-6 text-xl font-bold mr-2">
          <li className="relative top-2">
            <Link
              href="/#"
              className="text-red hover:text-red hover:border-red border-b-4 pb-4 border-red"
            >
              HOME
            </Link>
          </li>
          <li className="relative top-2">
            <Link
              href="/#about"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              ABOUT
            </Link>
          </li>
          <li className="relative top-2">
            <Link
              href="/#timeline"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              TIMELINE
            </Link>
          </li>
          <li className="relative top-2">
            <Link
              href="/#speakers"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              SPEAKERS
            </Link>
          </li>
          <li className="relative top-2">
            <Link
              href="/#footer"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </nav>
    </BrowserRouter>
  );
}

function SmallNavbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="md:hidden flex justify-between items-center p-4 gap-x-12">
      <div>
        <img src={logo} className="m-2 scale-65"></img>
      </div>
      <div
        className="text-2xl"
        onClick={() => {
          setNavOpen(true);
        }}
      >
        <FaBars />
      </div>

      <BrowserRouter>
        <nav
          className={`bg-[#54080850] transition-opacity duration-150 mobile-navbar backdrop-blur-md p-6 fixed flex-col items-center gap-y-12 top-4 right-4 left-4 bottom-4 z-50 rounded-lg ${
            navOpen ? `flex` : `hidden opacity-0`
          }`}
        >
          <button onClick={() => setNavOpen(false)} className="self-end text-3xl">
            <FaXmark />
          </button>
          <div>
            <img src={logo} className="m-2 scale-70"></img>
          </div>
          <ul className="flex flex-col gap-y-4 text-center text-xl font-medium">
            <li>
              <Link href="/#" onClick={() => setNavOpen(false)}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setNavOpen(false)}>
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/#timeline" onClick={() => setNavOpen(false)}>
                TIMELINE
              </Link>
            </li>
            <li>
              <Link href="/#speakers" onClick={() => setNavOpen(false)}>
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link href="/#footer" onClick={() => setNavOpen(false)}>
                CONTACT US
              </Link>
            </li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default Navbar;
