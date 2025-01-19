import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Contact Me Section */}
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800">Contact Me</h3>
        </div>

        {/* GitHub Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <a
            href="https://github.com/eviiileyeee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <FaGithub className="text-2xl mr-2" />
            <span className="text-base">GitHub</span>
          </a>
        </div>

        {/* Instagram Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <a
            href="https://www.instagram.com/eviiileyeee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <FaInstagram className="text-2xl mr-2" />
            <span className="text-base">Instagram</span>
          </a>
        </div>

        {/* LinkedIn Section */}
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/harendra-pratap-singh-bundela?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-800 hover:text-gray-600"
          >
            <FaLinkedin className="text-2xl mr-2" />
            <span className="text-base">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-gray-600 text-sm">
        Copyright &#169; harensportfolio.com | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
