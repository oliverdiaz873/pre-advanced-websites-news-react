import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { MenuIcon, CloseIcon } from '../../../../shared/components/icons';
import logoImg from '../../../../assets/images/logo/logo.jpg';
import { Navigation } from '../../../navigation/components';
import { SearchBar } from '../SearchBar';
import { ThemeToggle } from '../ThemeToggle';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gray-100 border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 transition-colors duration-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[70px]">
          {/* Logo Section */}
          <div className="flex items-center shrink-0">
            <Link to="/" className="flex items-center gap-2 text-decoration-none">
              <img src={logoImg} alt="Logo NewsHub" className="w-[45px] h-[45px] object-cover rounded-md" loading="lazy" />
              <h1 className="text-2xl font-black tracking-tight text-gray-900 dark:text-white m-0 hidden sm:block">NewsHub</h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-between lg:ml-10">
            <Navigation />
            <div className="flex items-center gap-2">
              <SearchBar />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
          <div className="pt-2 pb-3">
            <Navigation />
          </div>
          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
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
