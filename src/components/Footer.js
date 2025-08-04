import React, { useContext } from 'react';
import { FaTwitter, FaPinterestP, FaInstagram } from 'react-icons/fa';
import { CursorContext } from '../context/CursorContext';

const Footer = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center" 
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}>
        <p className="mb-4">© 2025 Mohit Thakur. All rights reserved.</p>
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://x.com/thakurmohit1509"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <FaTwitter />
          </a>
          <a
            href="http://www.pinterest.com/mohitthakur_photography"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
            className="hover:text-red-400 transition"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <FaPinterestP />
          </a>
          <a
            href="https://www.instagram.com/mohitthakur_photography"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-400 transition"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
