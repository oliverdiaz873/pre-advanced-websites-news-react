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
              `block px-4 py-2 text-[16px] rounded lg:bg-transparent transition-all duration-300 ${
                isActive
                  ? 'bg-[#ebebeb] text-[#dc3545] font-semibold dark:bg-gray-800 dark:text-[#dc3545] rounded-lg'
                  : 'text-black hover:text-[#dc3545] dark:text-gray-300 dark:hover:text-[#dc3545]'
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
