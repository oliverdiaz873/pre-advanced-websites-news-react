export interface NavItem {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  { name: 'Inicio', path: '/' },
  { name: 'Política', path: '/category/politica' },
  { name: 'Internacional', path: '/category/internacional' },
  { name: 'Economía', path: '/category/economia' },
  { name: 'Salud', path: '/category/salud' },
  { name: 'Deporte', path: '/category/deporte' },
  { name: 'Clima', path: '/category/clima' },
  { name: 'Justicia', path: '/category/justicia' },
];
