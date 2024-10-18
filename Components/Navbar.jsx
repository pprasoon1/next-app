'use client'
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo */}
        <h1 className="text-lg font-semibold">Todo APP</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-m">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">Products</li>
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 p-4 bg-gray-700">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">Products</li>
          <li className="hover:text-orange-400 cursor-pointer">About</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
