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
    <ul className="m-0 mb-2 flex list-none flex-col p-0 lg:mb-0 lg:flex-row lg:items-center">
      {navItems.map((item) => (
        <li key={item.name}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `block rounded px-3 py-2 text-[16px] text-black transition-all duration-300 dark:text-gray-300 ${
                isActive
                  ? 'rounded-lg bg-[#ebebeb] text-[#dc3545] dark:bg-gray-800 dark:text-[#dc3545]'
                  : 'hover:text-[#dc3545] dark:hover:text-[#dc3545]'
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
