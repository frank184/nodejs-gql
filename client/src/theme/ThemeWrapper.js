import React, { useEffect } from 'react';
import { ThemeContext, themes } from '../contexts/ThemeContext';
import useTheme from '../hooks/useTheme';

export default function ThemeContextWrapper(props) {
  const [theme, setTheme] = useTheme();

  function changeTheme(theme) {
    setTheme(theme);
  }

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.setAttribute("data-bs-theme", "light")
        break;
      case themes.dark:
      default:
        document.body.setAttribute("data-bs-theme", "dark")
        break;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}