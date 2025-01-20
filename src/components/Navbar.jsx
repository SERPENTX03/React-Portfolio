"use client";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };
  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#282727] bg-opacity-100">
      <div className=" flex text-2xl items-center justify-between text-gray-200 px-6 max-w-[1300px] mx-auto h-24">
        <a href="">รับทำเว็บไซต์</a>
        {/* Menu Pc */}
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li className="relative group">
            <Link to="service" smooth={true} offset={50} duration={500}>
              Service
            </Link>
            <span
              className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100
          transition-transform duration-300 ease-in-out"
            ></span>
          </li>
          <li className="relative group">
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
            <span
              className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100
          transition-transform duration-300 ease-in-out"
            ></span>
          </li>

          <li className="relative group">
            <Link to="portfolio" smooth={true} offset={50} duration={500}>
              Protfolio
            </Link>
            <span
              className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100
          transition-transform duration-300 ease-in-out"
            ></span>
          </li>

          <li className="relative group">
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
            <span
              className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100
          transition-transform duration-300 ease-in-out"
            ></span>
          </li>
        </ul>
        {/* Ham & Exit */}
        <div
          className="block md:hidden cursor-pointer z-30"
          onClick={toggleNav}
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Menu Mobie */}
        <div
          className={
            nav
              ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323] ease-in-out duration-700"
              : "fixed left-[-100%]"
          }
        >
          <ul className="font-semibold text-4xl  mt-24 cursor-pointer">
            <li className="relative group  p-4 border-b">
              <Link
                to="service"
                smooth={true}
                offset={50}
                duration={500}
                className="inline-block relative"
              >
                Service
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100 
          transition-transform duration-300 ease-in-out origin-left"
                ></span>
              </Link>
            </li>
            <li className="relative group  p-4 border-b">
              <Link
                to="service"
                smooth={true}
                offset={50}
                duration={500}
                className="inline-block relative"
              >
                About
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100 
          transition-transform duration-300 ease-in-out origin-left"
                ></span>
              </Link>
            </li>

            <li className="relative group p-4 border-b">
              <Link
                to="portfolio"
                smooth={true}
                offset={50}
                duration={500}
                className="relative inline-block"
              >
                Protfolio
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100
          transition-transform duration-300 ease-in-out"
                ></span>
              </Link>
            </li>

            <li className="relative group border-b p-4">
              <Link
                to="contact"
                smooth={true}
                offset={50}
                duration={500}
                className="relative inline-block"
              >
                Contact
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-sky-600 transform scale-x-0 group-hover:scale-100
          transition-transform duration-300 ease-in-out"
                ></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
