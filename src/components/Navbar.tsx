'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Mock authentication state

  return (
    <nav className="bg-blue-700 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-3xl font-bold text-white">
          Web3 Market
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            Contact
          </Link>

          {/* Conditional Rendering based on Authentication */}
          {!isAuthenticated ? (
            <div className="space-x-4">
              <Link href="/login" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
                Login
              </Link>
              <Link
                href="/signup"
                className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-500 transition duration-200 ease-in-out"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <Link
              href="/dashboard"
              className="text-white hover:text-teal-400 transition duration-200 ease-in-out"
            >
              Dashboard
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none" aria-label="Open Menu">
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
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
