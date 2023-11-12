import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeBtn = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ darkMode, darkModeBtn }}>
      {children}
    </DarkModeContext.Provider>
  );
}
