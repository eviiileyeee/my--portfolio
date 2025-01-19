import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/skills", text: "Skills" },
    { to: "/projects", text: "Projects" },
    { to: "/contact", text: "Contact" }
  ];

  const handleNavigation = (to) => {
    setIsMenuOpen(false);
    if (to.startsWith('http')) {
      window.open(to, '_blank');
    } else {
      navigate(to);
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
            >
              Harendra Portfolio
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <button
                    onClick={() => handleNavigation(link.to)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                      ${isActive(link.to) 
                        ? 'text-blue-600 bg-blue-50' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    {link.text}
                  </button>
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
              aria-label="Toggle menu"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <button
                  key={link.text}
                  onClick={() => handleNavigation(link.to)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200
                    ${isActive(link.to)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {link.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;