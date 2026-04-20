import { useEffect, useState } from 'react';
import { BrightnessIcon } from '../../../../shared/components/icons';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
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
      className="flex h-[45px] w-[45px] items-center justify-center rounded-md border border-transparent p-0 text-black transition-all duration-300 hover:bg-[#dc3545] hover:text-white dark:text-gray-300 dark:hover:bg-[#dc3545]"
      aria-label="Cambiar modo oscuro"
      type="button"
    >
      <BrightnessIcon className="h-[1.3rem] w-[1.3rem] shrink-0" />
    </button>
  );
};
