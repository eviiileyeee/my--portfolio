import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#navBar", text: "Home" },
    { href: "about/index.html", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "https://contact-harendra.netlify.app/", text: "Contact" }
  ];

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Harendra Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;