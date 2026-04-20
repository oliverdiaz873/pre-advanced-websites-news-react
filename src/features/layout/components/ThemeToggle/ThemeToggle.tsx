import { useEffect, useState } from 'react';
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
      className="w-[45px] h-[45px] flex items-center justify-center p-2 rounded-md text-black hover:text-[#dc3545] dark:text-gray-300 dark:hover:text-[#dc3545] transition-colors duration-300 focus:outline-none"
      aria-label="Alternar modo oscuro"
      type="button"
    >
      <BrightnessIcon className="w-5 h-5 flex-shrink-0" />
    </button>
  );
};
