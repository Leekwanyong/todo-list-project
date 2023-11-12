import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const darkModeBtn = () => {
    setDarkMode((mode) => !mode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <DarkModeContext.Provider value={{ darkMode, darkModeBtn }}>
      {children}
    </DarkModeContext.Provider>
  );
}
