import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: 'es', label: 'ES', flag: '🇪🇸' },
  { code: 'en', label: 'EN', flag: '🇺🇸' },
];

/**
 * LanguageSelector
 * 
 * Selector de idioma con dropdown compacto.
 * Permite cambiar el idioma de la aplicación en tiempo real sin recarga.
 * Sigue el mismo patrón visual que ThemeToggle.
 */
export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) ?? languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleSelect = (langCode: string) => {
    i18n.changeLanguage(langCode);
    document.documentElement.lang = langCode;
    setIsOpen(false);
  };

  return (
    <div ref={rootRef} className="language-selector" aria-label="Language selector">
      <button
        type="button"
        className="language-selector-trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className="language-selector-flag" aria-hidden="true">{currentLang.flag}</span>
        <span className="language-selector-code">{currentLang.label}</span>
        <span className={`language-selector-caret ${isOpen ? 'is-open' : ''}`} aria-hidden="true">▼</span>
      </button>

      <div
        className={`language-selector-menu ${isOpen ? 'is-open' : ''}`}
        role="listbox"
        aria-label="Available languages"
      >
        {languages.map((lang) => (
          <button
            key={lang.code}
            type="button"
            className={`language-selector-option ${i18n.language === lang.code ? 'is-active' : ''}`}
            role="option"
            aria-selected={i18n.language === lang.code}
            onClick={() => handleSelect(lang.code)}
          >
            <span className="language-selector-flag" aria-hidden="true">{lang.flag}</span>
            <span className="language-selector-label">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
