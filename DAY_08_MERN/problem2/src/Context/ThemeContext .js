import React, { createContext, useState, useContext } from 'react';

// Create ThemeContext with default light theme
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

// Define light and dark themes
const themes = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#333333',
    text: '#ffffff',
  },
};

// ThemeProvider component to manage current theme state
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to consume the current theme context
const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
