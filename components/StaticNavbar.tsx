"use client";
import { useState } from "react";

export default function StaticNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-900">
            Kannan M
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="w-8 h-8 flex flex-col justify-center items-center focus:outline-none"
            >
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-700"></div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="flex flex-col items-center py-4 space-y-4">
            <a href="#home" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
