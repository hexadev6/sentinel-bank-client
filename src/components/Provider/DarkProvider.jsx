import React, { Children, createContext, useState } from "react";

export const DarkModeContext = createContext();

const DarkProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  const themeInfo = {
    darkMode,
    toggleDarkMode,
    setDarkMode,
  };

  return (
    <DarkModeContext.Provider value={themeInfo}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkProvider;
