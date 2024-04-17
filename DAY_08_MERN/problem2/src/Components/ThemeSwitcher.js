import React from 'react';
import { useTheme } from '../Context/ThemeContext ';

// ThemeSwitcher component to toggle between light and dark themes
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  );
};

export default ThemeSwitcher;
