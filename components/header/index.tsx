"use client"
import React from "react";

const Header = () => {
  
  const navItems = ["Music", "File", "Edit", "View", "Account"];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* Desktop Header */}
        <div className="hidden md:flex h-16 items-center justify-between">
          <nav className="flex items-center justify-start space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <button
                key={item}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 py-1 px-2 rounded-md hover:bg-gray-50"
              >
                {item}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-black transition-colors duration-200 py-1 px-2 rounded-md hover:bg-gray-50">
              {navItems[navItems.length - 1]}
            </button>
            <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
              <UserIcon />
            </div>
          </div>
        </div>

      
      </div>
    </header>
  );
};

// Helper components
const MenuIcon = ({ open }: { open: boolean }) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {open ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4 text-gray-600"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export default Header;