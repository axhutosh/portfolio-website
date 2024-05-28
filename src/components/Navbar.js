// src/components/Navbar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="/" className="text-white text-lg font-bold">Ashutosh Kumar Sah</a>
        </div>
        <ul className="flex space-x-4">
          <li>
            <a href="#about" className="hover:text-blue-500">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </li>
          <li className="ml-2"> {/* Adjusted margin */}
            <a href="https://linkedin.com/in/ashutosh-kumar-329699259/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          <li className="ml-2"> {/* Adjusted margin */}
            <a href="https://instagram.com/axhutosh_" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </nav>
  );
};


export default Navbar;
