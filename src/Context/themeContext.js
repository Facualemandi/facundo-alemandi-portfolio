import { createContext, useContext, useState } from "react";

export const darkContext = createContext();

export const useThemeMode = () => {
  const context = useContext(darkContext);
  return context;
};

export function ThemeMode({ children }) {
  const [theme, setTheme] = useState(false);

  const changeTheme = () => (!theme ? setTheme(true) : setTheme(false));

  

  return (
    <darkContext.Provider value={{ theme, changeTheme }}>
      {children}
    </darkContext.Provider>
  );
}
