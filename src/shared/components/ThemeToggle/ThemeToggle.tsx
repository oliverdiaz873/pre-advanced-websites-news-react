import type { ReactElement } from 'react';
import './ThemeToggle.css';
import { SystemIcon, MoonIcon, SunIcon } from '../icons';
import { useTheme, type ThemePreference } from '../../../theme';

const iconByTheme: Record<ThemePreference, ReactElement> = {
  light: <SunIcon className="h-[1rem] w-[1rem] shrink-0" />,
  dark: <MoonIcon className="h-[1rem] w-[1rem] shrink-0" />,
  system: <SystemIcon className="h-[1rem] w-[1rem] shrink-0" />,
};

const options: Array<{ value: ThemePreference; label: string }> = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Oscuro' },
  { value: 'system', label: 'Sistema' },
];

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <div
      className="theme-toggle"
      role="group"
      aria-label={`Selector de tema. Tema activo: ${theme}. Tema aplicado: ${resolvedTheme}.`}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`theme-toggle-option ${theme === option.value ? 'is-active' : ''}`}
          onClick={() => setTheme(option.value)}
          aria-pressed={theme === option.value}
          aria-label={
            option.value === 'system'
              ? `Usar tema del sistema. Actualmente se aplica ${resolvedTheme}.`
              : `Activar tema ${option.label.toLowerCase()}.`
          }
          title={option.value === 'system' ? `Sistema (${resolvedTheme})` : option.label}
        >
          {iconByTheme[option.value]}
          <span className="theme-toggle-label">{option.label}</span>
        </button>
      ))}
    </div>
  );
};
