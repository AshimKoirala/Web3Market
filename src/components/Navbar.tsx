'use client';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { useState } from 'react';

const Navbar = () => {
  const { isSignedIn } = useAuth();  // Use Clerk's isSignedIn hook
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Track mobile menu state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <Link href="/posts" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            Posts
          </Link>
          <Link href="/about" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            Contact
          </Link>

          {/* Conditional Rendering based on Authentication */}
          {!isSignedIn ? (
            <div className="space-x-4">
              <Link href="/auth/login" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-500 transition duration-200 ease-in-out"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="space-x-4">
            <Link
              href="/dashboard"
              className="bg-teal-500 px-4 py-2 rounded-lg text-white hover:bg-teal-700 hover:text-white transition duration-200 ease-in-out"
            >
              Dashboard
            </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            aria-label="Open Menu"
            onClick={toggleMobileMenu}
          >
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

      {/* Mobile Menu Links (Only when menu is open) */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-blue-700 text-white p-4">
          <Link href="/" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            Home
          </Link>
          <Link href="/posts" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            Posts
          </Link>
          <Link href="/about" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-teal-400 transition duration-200 ease-in-out">
            Contact
          </Link>

          {/* Conditional Rendering for Mobile Authentication */}
          {!isSignedIn ? (
            <div className="space-x-4">
              <Link href="/auth/login" className="bg-teal-500 px-4 py-2 rounded-lg text-white hover:bg-teal-400 transition duration-200 ease-in-out">
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="bg-teal-500 px-4 py-2 rounded-lg text-white hover:bg-teal-400 transition duration-200 ease-in-out"
              >
                Sign Up
              </Link>
            </div>
          ) : (
            <Link
              href="/dashboard"
              className=" bg-teal-500 px-4 py-2 rounded-lg text-white hover:text-teal-400 transition duration-200 ease-in-out"
            >
              Dashboard
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
