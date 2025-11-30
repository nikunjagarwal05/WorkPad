import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLocation } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  
  // Check if we're on the dashboard page
  const isDashboard = location.pathname === '/dashboard';
  
  // Position: top-4 for dashboard (with navbar), top-4 for other pages (higher up)
  const topPosition = isDashboard ? 'top-4' : 'top-4';

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`fixed ${topPosition} right-4 sm:right-6 z-[9999] w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#C97D60] hover:bg-[#B86A4F] text-white shadow-lg transition-all transform hover:scale-110 active:scale-95`}
      aria-label="Toggle theme"
      title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <MdLightMode className="text-lg sm:text-xl" />
      ) : (
        <MdDarkMode className="text-lg sm:text-xl" />
      )}
    </button>
  );
};

export default ThemeToggle;

