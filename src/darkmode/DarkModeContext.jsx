import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  // 로컬스토리지에 저장 불리언 값으로 상태를 저장하면은 문자열이 아니기 떄문에 문자열로 바꿔줌
  const storedDarkMode = localStorage.getItem("darkMode") === "true";
  const [darkMode, setDarkMode] = useState(storedDarkMode);

  const darkModeBtn = () => {
    setDarkMode((mode) => !mode);
  };

  // 실행 시 업데이트
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
