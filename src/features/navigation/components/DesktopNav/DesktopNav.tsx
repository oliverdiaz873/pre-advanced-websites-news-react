import { NavLink } from 'react-router-dom';
import { navItems } from '../../config/navItems';

/**
 * DesktopNav
 * 
 * Navegación principal optimizada para pantallas grandes (>= 1024px).
 * Diseño horizontal amplio.
 */
export const DesktopNav = () => {
  return (
    <nav aria-label="Navegación de Escritorio" className="hidden lg:block">
      <ul className="m-0 flex list-none items-center p-0">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block rounded px-2 py-2 text-[16px] text-black transition-all duration-300 dark:text-gray-300 ${
                  isActive
                    ? 'bg-[#ebebeb] text-[#dc3545] dark:bg-gray-800 dark:text-[#dc3545]'
                    : 'hover:text-[#dc3545] dark:hover:text-[#dc3545] hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
