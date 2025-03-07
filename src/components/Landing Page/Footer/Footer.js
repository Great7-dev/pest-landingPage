import React from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo / Company Name */}
        <div>
          <h2 className="text-xl font-semibold">Your Company</h2>
          <p className="text-sm text-gray-400">We provide the best services.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://wa.me/07067653341"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 text-2xl hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-2xl hover:text-blue-400"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-2xl hover:text-blue-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 text-2xl hover:text-pink-400"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
