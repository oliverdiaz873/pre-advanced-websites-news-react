import { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from '../../components/icons';
import logoImg from '../../../assets/images/logo/logo.jpg';
import { Navigation } from '../../../features/navigation/components';
import { SearchBar, ThemeToggle } from '../../components';

/**
 * Header
 * 
 * Componente de cabecera global.
 * Gestiona el menú móvil y contiene la navegación principal, búsqueda y cambio de tema.
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-main">
      <nav className="header-shell">
        <div className="header-bar">
          <div className="shrink-0">
            <Link to="/" className="header-brand" aria-label="Ir a la página principal de NewsHub">
              <img src={logoImg} alt="Logo NewsHub" className="header-brand-logo" loading="lazy" />
              <h1 className="header-brand-title hidden sm:block">NewsHub</h1>
            </Link>
          </div>

          <div className="header-desktop">
            <Navigation />
            <div className="header-actions">
              <SearchBar />
              <ThemeToggle />
            </div>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="header-mobile-toggle"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div className={`header-mobile-panel ${isMenuOpen ? 'is-open' : 'is-closed'}`}>
          <div className="header-mobile-nav">
            <Navigation />
          </div>
          <div className="header-mobile-actions">
            <div className="flex flex-col">
              <SearchBar />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
