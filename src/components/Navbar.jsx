import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
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
      <div className="absolute left-0 top-[95%] bg-red/50 h-[1px] w-full z-0 "></div>

      <div className="w-full md:w-7/8 flex justify-between right-8 md:right-0 md:ml-24 relative z-50">
        {isDesktop ? <LargeNavbar /> : <SmallNavbar />}
      </div>
    </div>
  );
}

function LargeNavbar() {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} className="m-2 scale-70"></img>
        </Link>
      </div>
      <nav className="justify-around items-center p-4 hidden md:flex">
        <ul className="flex gap-x-6 text-xl mr-2">
          
          <li className="relative top-2">
            <a
              href="/#about"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              About
            </a>
          </li>
          <li className="relative top-2">
            <a
              href="/#timeline"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              Timeline
            </a>
          </li>
          <li className="relative top-2">
            <a
              href="/#speakers"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              Speakers
            </a>
          </li>
          <li className="relative top-2">
            <a
              href="/#faq"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              FAQ
            </a>
          </li>
          <li className="relative top-2">
            <a
              href="/#footer"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              Contact Us
            </a>
          </li>
          <li className="relative top-2">
            <Link
              to="/register"
              className="text-red-700 hover:text-red hover:border-red border-b-4 pb-4 border-transparent"
            >
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

function SmallNavbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="md:hidden flex justify-between items-center p-4 gap-x-12">
      <div>
        <Link to="/">
          <img src={logo} className="m-2 scale-65"></img>
        </Link>
      </div>
      <div
        className="text-2xl"
        onClick={() => {
          setNavOpen(true);
        }}
      >
        <FaBars />
      </div>

      <nav
        className={`bg-[#54080880] transition-opacity duration-150 mobile-navbar backdrop-blur-md p-6 fixed flex-col items-center gap-y-12 top-4 right-4 left-4 bottom-4 rounded-lg ${
          navOpen ? `flex` : `hidden opacity-0`
        }`}
      >
        <button onClick={() => setNavOpen(false)} className="self-end text-3xl">
          <FaXmark />
        </button>
        <div>
          <Link to="/">
            <img src={logo} className="m-2 scale-70"></img>
          </Link>
        </div>
        <ul className="flex flex-col gap-y-4 text-center text-xl font-medium">
          <li>
            <a href="/#about" onClick={() => setNavOpen(false)}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="/#timeline" onClick={() => setNavOpen(false)}>
              TIMELINE
            </a>
          </li>
          <li>
            <a href="/#speakers" onClick={() => setNavOpen(false)}>
              SPEAKERS
            </a>
          </li>
          <li>
            <a href="/#footer" onClick={() => setNavOpen(false)}>
              CONTACT US
            </a>
          </li>
          <li>
            <Link to="/register" onClick={() => setNavOpen(false)}>
              REGISTER
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
