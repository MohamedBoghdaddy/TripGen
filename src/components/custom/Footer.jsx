import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">TripGen</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <a
            href="/"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            About
          </a>
          <a
            href="/services"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Services
          </a>
          <a
            href="/contact"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.129 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.243 0-1.631.772-1.631 1.562V12h2.773l-.443 2.891h-2.33v6.987C18.343 21.129 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M8.29 20.252c7.547 0 11.675-6.155 11.675-11.49 0-.175 0-.349-.012-.522A8.337 8.337 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.641 4.08 4.08 0 0 0 1.804-2.243 8.18 8.18 0 0 1-2.605.981 4.088 4.088 0 0 0-6.993 3.73 11.589 11.589 0 0 1-8.413-4.235 4.04 4.04 0 0 0 1.27 5.457 4.105 4.105 0 0 1-1.85-.503v.051a4.092 4.092 0 0 0 3.277 4.004 4.08 4.08 0 0 1-1.846.069 4.094 4.094 0 0 0 3.827 2.808A8.2 8.2 0 0 1 2 18.407a11.54 11.54 0 0 0 6.29 1.823" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-400 hover:text-white transition duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.243 2.683.518a5.37 5.37 0 0 1 1.949 1.258 5.363 5.363 0 0 1 1.257 1.949c.275.713.464 1.513.518 2.683.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.054 1.17-.243 1.97-.518 2.683a5.37 5.37 0 0 1-1.258 1.949 5.37 5.37 0 0 1-1.949 1.257c-.713.275-1.513.464-2.683.518-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.17-.054-1.97-.243-2.683-.518a5.37 5.37 0 0 1-1.949-1.258 5.37 5.37 0 0 1-1.257-1.949c-.275-.713-.464-1.513-.518-2.683C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.243-1.97.518-2.683A5.37 5.37 0 0 1 4.009 2.518 5.37 5.37 0 0 1 5.957 1.26c.713-.275 1.513-.464 2.683-.518C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.736 0 8.332.015 7.052.073c-1.283.059-2.518.26-3.681.625A7.373 7.373 0 0 0 .698 2.944 7.376 7.376 0 0 0 .07 4.871c-.365 1.162-.567 2.397-.626 3.68C-.015 8.84 0 9.244 0 12c0 2.756.015 3.16.073 4.452.059 1.283.26 2.518.625 3.681a7.373 7.373 0 0 0 1.673 2.308 7.373 7.373 0 0 0 2.308 1.673c1.162.365 2.398.567 3.681.625C8.332 23.985 8.736 24 12 24c3.264 0 3.668-.015 4.948-.073 1.283-.059 2.518-.26 3.681-.625a7.373 7.373 0 0 0 2.308-1.673 7.373 7.373 0 0 0 1.673-2.308c.365-1.162.567-2.398.625-3.681.058-1.292.073-1.696.073-4.452 0-2.756-.015-3.16-.073-4.452-.059-1.283-.26-2.518-.625-3.681a7.373 7.373 0 0 0-1.673-2.308 7.373 7.373 0 0 0-2.308-1.673c-1.162-.365-2.398-.567-3.681-.625C15.668.015 15.264 0 12 0z" />
              <path d="M12 5.838a6.163 6.163 0 1 0 0 12.327 6.163 6.163 0 1 0 0-12.327zm0 10.163a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-4 text-center text-gray-400 text-sm">
        © 2024 TripGen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
