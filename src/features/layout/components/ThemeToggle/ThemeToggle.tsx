import React, { useEffect, useState } from 'react';
import { BrightnessIcon } from '../../../../shared/components/icons';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial system preference or localStorage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    if (nextIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="max-w-[40px] ml-0 mt-3 lg:mt-0 lg:ml-2 flex items-center justify-center p-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
      aria-label="Cambiar modo oscuro"
      type="button"
    >
      <BrightnessIcon className="w-5 h-5 flex-shrink-0" />
    </button>
  );
};
