import React, { createContext, useState, useContext } from 'react';

// Create a context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // Default theme

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
