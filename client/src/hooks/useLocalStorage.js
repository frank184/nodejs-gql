import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  const value = localStorage.getItem(key);
  return value || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};