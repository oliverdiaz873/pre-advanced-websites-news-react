import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { navItems } from '../../config/navItems';

/**
 * DesktopNav
 * 
 * Navegación principal optimizada para pantallas grandes (>= 1024px).
 * Diseño horizontal amplio.
 */
export const DesktopNav = () => {
  const { t } = useTranslation('navbar');

  return (
    <nav aria-label={t('desktopNavLabel')} className="hidden lg:block">
      <ul className="m-0 flex list-none items-center p-0">
        {navItems.map((item) => (
          <li key={item.nameKey}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block rounded px-2 py-2 text-[16px] text-black transition-all duration-300 dark:text-[var(--color-text-primary)] ${
                  isActive
                    ? 'bg-[#ebebeb] text-[#dc3545] dark:bg-[#ebebeb] dark:text-black'
                    : 'hover:text-[#dc3545] dark:hover:text-[#dc3545]'
                }`
              }
            >
              {t(item.nameKey)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
