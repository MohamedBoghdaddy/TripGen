import React, { useState } from "react";
import logo from "../../assets/images/logo-nav.svg";
import { Button } from "../ui/button";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); // State to handle hamburger menu toggle

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-light flex items-center justify-between bg-white shadow-sm h-16 px-6">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Company Logo" className="w-20 h-14" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-500 font-medium">
            Home
          </a>
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Pricing
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Sign In Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Button>Sign In</Button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-start p-4 space-y-2">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-500 font-medium w-full"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-500 font-medium w-full"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-blue-500 font-medium w-full"
            >
              Pricing
            </a>
            <Button className="w-full text-center mt-2">Sign In</Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
