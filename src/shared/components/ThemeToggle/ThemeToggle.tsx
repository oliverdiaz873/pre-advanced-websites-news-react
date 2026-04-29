import { useEffect, useId, useRef, useState, type ReactElement } from 'react';
import './ThemeToggle.css';
import { SunIcon, MoonIcon, SystemIcon } from '../icons';
import { useTheme, type ThemePreference } from '../../../theme';

const iconByTheme: Record<ThemePreference, ReactElement> = {
  light: <SunIcon className="h-[1.25rem] w-[1.25rem] shrink-0" />,
  dark: <MoonIcon className="h-[1.25rem] w-[1.25rem] shrink-0" />,
  system: <SystemIcon className="h-[1.25rem] w-[1.25rem] shrink-0" />,
};

const options: Array<{ value: ThemePreference; label: string; menuLabel: string }> = [
  { value: 'light', label: 'light', menuLabel: 'light' },
  { value: 'dark', label: 'dark', menuLabel: 'dark' },
  { value: 'system', label: 'auto', menuLabel: 'auto' },
];

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const selectedOption = options.find((option) => option.value === theme) ?? options[2];

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (nextTheme: ThemePreference) => {
    setTheme(nextTheme);
    setIsOpen(false);
  };

  return (
    <div
      ref={rootRef}
      className="theme-toggle"
      aria-label={`Theme selector. Active preference: ${theme}. Applied theme: ${resolvedTheme}.`}
    >
      <button
        type="button"
        className="theme-toggle-trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={`Tema: ${selectedOption.label}. Tema aplicado: ${resolvedTheme}.`}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        {iconByTheme[theme]}
        {isOpen && (
          <span className="theme-toggle-trigger-value">{selectedOption.label}</span>
        )}
        {isOpen && (
          <span className={`theme-toggle-caret ${isOpen ? 'is-open' : ''}`} aria-hidden="true">
            ▼
          </span>
        )}
      </button>

      <div
        id={menuId}
        className={`theme-toggle-menu ${isOpen ? 'is-open' : ''}`}
        role="menu"
        aria-label="Theme options"
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`theme-toggle-option ${theme === option.value ? 'is-active' : ''}`}
            onClick={() => handleSelect(option.value)}
            role="menuitemradio"
            aria-checked={theme === option.value}
            aria-label={
              option.value === 'system'
                ? `Use auto theme. Currently applied: ${resolvedTheme}.`
                : `Use ${option.menuLabel.toLowerCase()} theme.`
            }
          >
            {iconByTheme[option.value]}
            <span className="theme-toggle-label">{option.menuLabel}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
