import type { ArticleContent } from '../newsModels';


export const opinionSaludContent: ArticleContent = {
  title: 'La importancia de la salud preventiva',
  date: '2 de octubre de 2025',
  datetime: '2025-10-02',
  category: 'Opinión',
  imageUrl: '/images/news/salud/antibioticos.avif',
  alt: 'La importancia de la salud preventiva',
  breadcrumb: {
    home: 'Inicio',
    current: 'Opinión Salud'
  },
  content: [
    'El sistema sanitario global ha estado históricamente enfocado en la cura, reaccionando ante la enfermedad una vez que esta se manifiesta. Sin embargo, la verdadera revolución médica del siglo XXI reside en la prevención. Invertir en salud preventiva no es solo una cuestión de bienestar individual, es una estrategia de supervivencia para los sistemas públicos de salud.',
    'Cada euro invertido en campañas de vacunación, detección temprana y promoción de hábitos saludables ahorra miles de euros en tratamientos crónicos y hospitalizaciones complejas. La tecnología hoy nos permite monitorear nuestra salud en tiempo real, ofreciéndonos una oportunidad única para intervenir antes de que el daño sea irreversible.',
    'La salud preventiva requiere un cambio de paradigma cultural: pasar de ser pacientes pasivos a ser gestores activos de nuestro propio bienestar. Solo a través de la educación y el acceso equitativo a servicios preventivos podremos garantizar una longevidad que sea verdaderamente saludable y digna para todos.'
  ]
};
