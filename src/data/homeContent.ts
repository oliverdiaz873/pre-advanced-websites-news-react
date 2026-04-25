import type { NewsArticle, OpinionArticle } from './newsModels';

export const breakingNews = {
  href: '/news/justicia/detienen-exfuncionario-fraude-financiero-millonario',
  text: 'Detienen a exfuncionario acusado de fraude financiero millonario',
};

export const featuredPrimary: NewsArticle = {
  id: 'inflacion_mercados',
  title: 'Incremento de la inflación impacta a los mercados',
  href: '/news/economia/incremento-inflacion-impacta-mercados',
  category: 'Economía',
  date: '4 de octubre de 2025',
  datetime: '2025-10-04',
  summary:
    'El aumento sostenido de la inflación genera incertidumbre en los mercados financieros y afecta el poder adquisitivo de los ciudadanos. Los precios de productos básicos y servicios esenciales continúan incrementándose, obligando a empresas y familias a ajustar presupuestos. Analistas advierten que, de no implementarse políticas económicas efectivas, esta tendencia podría persistir, impactando la inversión, el empleo y la estabilidad económica del país a mediano plazo.',
  imageUrl: '/images/news/economia/inflacion.jpg',
  alt: 'Incremento de la inflación impacta a los mercados',
};

export const featuredSecondary: [NewsArticle, NewsArticle] = [
  {
    id: 'victoria_equipo_local',
    title: 'Gran victoria del equipo local',
    href: '/news/deporte/gran-victoria-equipo-local-futbol',
    category: 'Deporte',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'El equipo local consiguió una importante victoria que lo acerca a la clasificación tras un intenso partido. Los jugadores mostraron un rendimiento excepcional, con goles decisivos y una defensa sólida que mantuvo al rival en constante presión durante todo el encuentro.',
    imageUrl: '/images/news/deporte/futbol.jpg',
    alt: 'Gran victoria del equipo local',
  },
  {
    id: 'guerra_ucrania_fin',
    title: 'La guerra de Ucrania llega a su fin',
    href: '/news/internacional/guerra-ucrania-llega-fin',
    category: 'Internacional',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Tras meses de negociaciones diplomáticas, el conflicto llega a su fin generando expectativas de estabilidad y reconstrucción en la región.',
    imageUrl: '/images/news/internacional/guerra.jpg',
    alt: 'La guerra de Ucrania llega a su fin',
  },
];

export const featuredGrid: NewsArticle[] = [
  {
    id: 'protestas_corrupcion',
    title: 'Protestas por corrupción',
    href: '/news/politica/protestas-corrupcion',
    category: 'Política',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Miles de ciudadanos se manifestaron en distintas ciudades exigiendo transparencia y sanciones contra los responsables.',
    imageUrl: '/images/news/politica/protestas.jpg',
    alt: 'Protestas por corrupción en el país',
  },
  {
    id: 'descubrimiento_virus',
    title: 'Descubren un nuevo virus que alerta a científicos',
    href: '/news/salud/contaminacion-aire-aumenta-riesgo-enfermedades-respiratorias',
    category: 'Salud',
    date: '9 de octubre de 2025',
    datetime: '2025-10-09',
    summary:
      'Investigadores internacionales analizan un nuevo virus que podría representar un riesgo para la salud pública global.',
    imageUrl: '/images/news/salud/virus.jpg',
    alt: 'Descubren un nuevo virus que alerta a científicos',
  },
  {
    id: 'investigacion_homicidio',
    title: 'Investigan homicidio en el centro de la ciudad',
    href: '/news/justicia/investigan-homicidio-centro-ciudad',
    category: 'Justicia',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'Las autoridades iniciaron una investigación para esclarecer las circunstancias del crimen ocurrido en una zona concurrida.',
    imageUrl: '/images/news/justicia/homicidio.jpg',
    alt: 'Investigan homicidio en el centro de la ciudad',
  },
  {
    id: 'huracan_atlantico',
    title: 'Huracán se fortalece en el Atlántico y genera alertas en la costa este de EE.UU.',
    href: '/news/clima/huracan-se-forma-atlantico-amenaza-costa-este',
    category: 'Clima',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'El fenómeno meteorológico continúa intensificándose y obliga a emitir alertas preventivas en varias zonas costeras.',
    imageUrl: '/images/news/clima/ciclon.jpg',
    alt: 'Huracán se fortalece en el Atlántico y genera alertas en la costa este de EE.UU.',
  },
  {
    id: 'detencion_fraude',
    title: 'Detienen a exfuncionario acusado de fraude financiero millonario',
    href: '/news/justicia/detienen-exfuncionario-fraude-financiero-millonario',
    category: 'Justicia',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'El exfuncionario fue arrestado tras ser vinculado a un esquema de fraude que habría causado pérdidas millonarias al Estado.',
    imageUrl: '/images/news/justicia/arrested.jpg',
    alt: 'Detienen a exfuncionario acusado de fraude financiero millonario',
  },
  {
    id: 'bolsa_valores_alza',
    title: 'La bolsa de valores cierra en alza tras jornada de optimismo inversor',
    href: '/news/economia/bolsa-valores-cierra-alza-optimismo-inversor',
    category: 'Economía',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Los mercados cerraron la jornada con ganancias impulsadas por el optimismo de los inversores y buenos indicadores económicos.',
    imageUrl: '/images/news/economia/bolsa-de-valores.avif',
    alt: 'La bolsa de valores cierra en alza tras jornada de optimismo inversor',
  },
];

export const latestNews: NewsArticle[] = [
  {
    id: 'tormenta_caribe',
    title: 'Tormenta tropical se aproxima al Caribe y alerta a varios países',
    href: '/news/clima/tormenta-tropical-aproxima-caribe-alerta-paises',
    category: 'Clima',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'Una tormenta tropical se aproxima al Caribe, generando alerta en varios países de la región. Las autoridades emiten avisos de lluvias intensas y vientos fuertes.',
    imageUrl: '/images/news/clima/tormenta.jpg',
    alt: 'Tormenta tropical se aproxima al Caribe',
  },
  {
    id: 'lakers_celtics',
    title: 'Los Lakers se imponen a los Celtics en un vibrante partido de la NBA',
    href: '/news/deporte/lakers-vencen-celtics-nba',
    category: 'Deporte',
    date: '7 de octubre de 2025',
    datetime: '2025-10-07',
    summary:
      'En un emocionante enfrentamiento, los Lakers lograron imponerse a los Celtics con marcador de 112-107. LeBron James lideró con 28 puntos y 9 asistencias.',
    imageUrl: '/images/news/deporte/NBA.jpg',
    alt: 'Los Lakers vencen a los Celtics',
  },
  {
    id: 'popularidad_presidente',
    title: 'Encuestas revelan incremento en la popularidad del presidente',
    href: '/news/politica/encuestas-revelan-incremento-popularidad-presidente',
    category: 'Política',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Las últimas encuestas muestran un aumento significativo en la popularidad del presidente, reflejando respaldo creciente hacia sus políticas y gestión gubernamental.',
    imageUrl: '/images/news/politica/presidente.avif',
    alt: 'Encuesta de popularidad presidencial',
  },
  {
    id: 'olimpiadas_apertura',
    title: 'Atletas internacionales brillan en ceremonia inaugural de los Juegos Olímpicos',
    href: '/news/deporte/atletas-rompen-records-mundiales',
    category: 'Deporte',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'La ceremonia inaugural reunió a atletas de más de 200 países en un espectáculo que combinó tradición, arte y emoción deportiva con el encendido del pebetero.',
    imageUrl: '/images/news/deporte/atletismo.jpg',
    alt: 'Ceremonia inaugural Juegos Olímpicos',
  },
  {
    id: 'resistencia_antibioticos',
    title: 'Aumenta la preocupación por la resistencia a los antibióticos',
    href: '/news/salud/aumenta-preocupacion-resistencia-antibioticos-mundial',
    category: 'Salud',
    date: '9 de octubre de 2025',
    datetime: '2025-10-09',
    summary:
      'La resistencia a los antibióticos continúa siendo una amenaza creciente para la salud pública. Expertos alertan sobre el uso excesivo e inadecuado de estos medicamentos.',
    imageUrl: '/images/news/salud/antibioticos.avif',
    alt: 'Resistencia a antibióticos',
  },
  {
    id: 'dolar_fortalece',
    title: 'El dólar se fortalece ante incertidumbre económica global',
    href: '/news/economia/dolar-alcanza-maximo-ano-frente-monedas',
    category: 'Economía',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'El dólar estadounidense se fortaleció frente a las principales divisas, impulsado por la incertidumbre económica global y la búsqueda de refugio por parte de los inversores.',
    imageUrl: '/images/news/economia/dolar.avif',
    alt: 'El dólar se fortalece',
  },
];

export const opinionArticles: OpinionArticle[] = [
  {
    id: 'opinion_politica',
    title: 'La democracia y el reto de la transparencia',
    href: '/opiniones/opinion-politica',
    summary:
      'La confianza ciudadana depende cada vez más de instituciones abiertas y responsables.',
    imageUrl: '/images/news/politica/congreso.avif',
    alt: 'La democracia y el reto de la transparencia',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
  },
  {
    id: 'opinion_economia',
    title: 'Hacia dónde va la economía global?',
    href: '/opiniones/opinion-economia',
    summary:
      'Analizamos los factores que marcarán el rumbo económico en los próximos años.',
    imageUrl: '/images/opiniones/opinion_economia.jpg',
    alt: 'Hacia dónde va la economía global?',
    date: '3 de octubre de 2025',
    datetime: '2025-10-03',
  },
  {
    id: 'opinion_salud',
    title: 'La importancia de la salud preventiva',
    href: '/opiniones/opinion-salud',
    summary:
      'Invertir en prevención es fundamental para mantener una población saludable y reducir gastos sanitarios.',
    imageUrl: '/images/news/salud/antibioticos.avif',
    alt: 'La importancia de la salud preventiva',
    date: '2 de octubre de 2025',
    datetime: '2025-10-02',
  },
];
