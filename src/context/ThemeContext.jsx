import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEME_COLORS } from '../constants/config';

// Create context
const ThemeContext = createContext();

/**
 * Theme provider component
 * @param {Object} props - Component props
 */
export const ThemeProvider = ({ children }) => {
  // Initialize theme state
  const [theme, setTheme] = useState({
    paperColor: THEME_COLORS.paper,
    pencilColor: THEME_COLORS.pencil,
    accentColor: THEME_COLORS.accent,
  });

  // Apply theme to CSS variables
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--paper-color', theme.paperColor);
    root.style.setProperty('--pencil-color', theme.pencilColor);
    root.style.setProperty('--accent-color', theme.accentColor);
  }, [theme]);

  // Update specific theme color
  const updateThemeColor = (colorType, value) => {
    setTheme(prevTheme => ({
      ...prevTheme,
      [colorType]: value
    }));
  };

  // Reset to default theme
  const resetTheme = () => {
    setTheme({
      paperColor: THEME_COLORS.paper,
      pencilColor: THEME_COLORS.pencil,
      accentColor: THEME_COLORS.accent,
    });
  };

  // Context value
  const value = {
    theme,
    updateThemeColor,
    resetTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 