import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 p-4 flex justify-between items-center text-white shadow">
      {/* Left Placeholder */}
      <div className="flex items-center w-1/4"></div>

      {/* Search Bar */}
      <div className="flex items-center w-1/2 justify-center">
        <input
          type="text"
          placeholder="Rechercher..."
          className="px-4 py-2 w-full max-w-md rounded bg-gray-700 text-white focus:outline-none"
        />
      </div>

      {/* Notification Icon & Profile */}
      <div className="flex items-center space-x-4 w-1/4 justify-end">
        {/* Notification */}
        <div className="relative">
          <span className="absolute right-0 top-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">4</span>
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
              d="M13 16h-1v-4h-1m1 0v-4m6 4h.01M4 6h16M4 10h16M4 14h16M4 18h16"
            />
          </svg>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img
            className="w-8 h-8 rounded-full"
            src="screens/silma logo.jpg"
            alt="Profile"
          />
          <span>Admin</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
