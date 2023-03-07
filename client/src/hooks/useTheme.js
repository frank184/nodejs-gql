import { useEffect } from 'react';
import { themes } from '../contexts/ThemeContext';
import { useLocalStorage } from "./useLocalStorage";

function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", themes.dark);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  });

  return [theme, setTheme];
};

export default useTheme;