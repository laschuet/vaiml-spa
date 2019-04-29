import { useEffect, useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) {
        window.localStorage.setItem(key, JSON.stringify(initialValue));
        return initialValue;
      }
      return JSON.parse(item);
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      const state = JSON.stringify(value);
      localStorage.setItem(key, state);
    } catch (error) {}
  });

  return [value, setValue];
};
