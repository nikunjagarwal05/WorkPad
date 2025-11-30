import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Apply theme immediately before React renders
const applyTheme = (isDark) => {
  const root = document.documentElement;
  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
};

// Initialize theme on load
if (typeof window !== 'undefined') {
  const saved = localStorage.getItem('theme');
  const initialDark = saved === 'dark' || false;
  applyTheme(initialDark);
}

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first, then default to light
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') {
        return true;
      }
      if (saved === 'light') {
        return false;
      }
    }
    // Default to light mode
    return false;
  });

  // Apply theme on mount and when it changes
  useEffect(() => {
    applyTheme(isDarkMode);
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newValue = !prev;
      // Apply immediately for instant feedback
      applyTheme(newValue);
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', newValue ? 'dark' : 'light');
      }
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

