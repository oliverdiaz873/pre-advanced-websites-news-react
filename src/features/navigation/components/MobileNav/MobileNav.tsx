import { NavLink } from 'react-router-dom';
import { navItems } from '../../config/navItems';

/**
 * MobileNav
 * 
 * Navegación optimizada para dispositivos móviles (< 768px).
 * Diseño puramente vertical, pensado para vivir dentro de un menú lateral (drawer) o acordeón.
 */
export const MobileNav = ({ onItemClick }: { onItemClick?: () => void }) => {
  return (
    <nav aria-label="Navegación Móvil" className="md:hidden">
      <ul className="m-0 flex list-none flex-col p-0 space-y-1">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              onClick={onItemClick}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-[16px] text-black transition-all duration-300 dark:text-[var(--color-text-primary)] ${
                  isActive
                    ? 'bg-[#ebebeb] text-[#dc3545] dark:bg-[#ebebeb] dark:text-black'
                    : 'hover:text-[#dc3545] dark:hover:text-[#dc3545]'
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
