import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Política', path: '/category/politica' },
    { name: 'Internacional', path: '/category/internacional' },
    { name: 'Economía', path: '/category/economia' },
    { name: 'Salud', path: '/category/salud' },
    { name: 'Deporte', path: '/category/deporte' },
    { name: 'Clima', path: '/category/clima' },
    { name: 'Justicia', path: '/category/justicia' },
  ];

  return (
    <ul className="flex flex-col lg:flex-row lg:space-x-4 mb-2 lg:mb-0 m-0 p-0 list-none">
      {navItems.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `block py-2 lg:p-0 rounded lg:bg-transparent transition-colors ${
                isActive
                  ? 'text-blue-700 font-semibold dark:text-blue-400'
                  : 'text-gray-700 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400'
              }`
            }
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
