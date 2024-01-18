import React from "react";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-800 p-2">
        <div className="container mx-auto flex justify-between items-center">
          {/* College Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/college-mono.gif"
              alt="College Logo"
              className="h-10 w-10 rounded-md"
            />
            <span className="text-white text-2xl font-bold">
              Sri Sathya Sai College for Women, Bhopal
            </span>
          </div>

          {/* Library Management Option */}
          <div>
            <a
              href="#"
              className="text-white hover:text-gray-300 transition duration-300 md:block hidden"
            >
              Library Management System
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
