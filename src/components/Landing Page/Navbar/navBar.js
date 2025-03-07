import React from "react";
import Logo from "../../../assets/mt-2048-logo-.png";
import { IoIosCall } from "react-icons/io";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full px-[17%] py-5 z-50 flex flex-row flex-wrap items-center justify-between bg-white/10 p-2 backdrop-blur-xl dark:bg-[#063f93]">
      {" "}
      <img src={Logo} alt="logo" />
      <ul className="text-white font-bold font-sans">
        <div className="flex items-center space-x-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </div>
      </ul>
      <div className="flex items-center space-x-2">
        <IoIosCall className="text-red-500" />
        <p className="text-white font-bold text-xl font-sans">
          Call Us +234 7067653341
        </p>
      </div>
    </nav>
  );
};

export default NavBar;
