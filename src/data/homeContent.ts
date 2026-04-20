export interface HomeArticle {
  id: string;
  title: string;
  href: string;
  category: string;
  date: string;
  datetime: string;
  summary: string;
  imageUrl: string;
  alt: string;
}

export interface OpinionArticle {
  id: string;
  title: string;
  href: string;
  summary: string;
  imageUrl: string;
  alt: string;
}

export const breakingNews = {
  href: '/news/justicia/noticia-del-fraude',
  text: 'Detienen a exfuncionario acusado de fraude financiero millonario',
};

export const featuredPrimary: HomeArticle = {
  id: 'inflacion_mercados',
  title: 'Incremento de la inflacion impacta a los mercados',
  href: '/news/economia/noticia-de-la-inflacion',
  category: 'Economia',
  date: '4 de octubre de 2025',
  datetime: '2025-10-04',
  summary:
    'El aumento sostenido de la inflacion genera incertidumbre en los mercados financieros y afecta el poder adquisitivo de los ciudadanos. Los precios de productos basicos y servicios esenciales continuan incrementandose, obligando a empresas y familias a ajustar presupuestos. Analistas advierten que, de no implementarse politicas economicas efectivas, esta tendencia podria persistir, impactando la inversion, el empleo y la estabilidad economica del pais a mediano plazo.',
  imageUrl: '/images/news/economia/inflacion.jpg',
  alt: 'Incremento de la inflacion impacta a los mercados',
};

export const featuredSecondary: HomeArticle[] = [
  {
    id: 'victoria_equipo_local',
    title: 'Gran victoria del equipo local',
    href: '/news/deporte/noticia-del-equipo-local',
    category: 'Deporte',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'El equipo local consiguio una importante victoria que lo acerca a la clasificacion tras un intenso partido. Los jugadores mostraron un rendimiento excepcional, con goles decisivos y una defensa solida que mantuvo al rival en constante presion durante todo el encuentro.',
    imageUrl: '/images/news/deporte/futbol.jpg',
    alt: 'Gran victoria del equipo local',
  },
  {
    id: 'guerra_ucrania_fin',
    title: 'La guerra de Ucrania llega a su fin',
    href: '/news/internacional/noticia-de-guerra',
    category: 'Internacional',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Tras meses de negociaciones diplomaticas, el conflicto llega a su fin generando expectativas de estabilidad y reconstruccion en la region.',
    imageUrl: '/images/news/internacional/guerra.jpg',
    alt: 'La guerra de Ucrania llega a su fin',
  },
];

export const featuredGrid: HomeArticle[] = [
  {
    id: 'protestas_corrupcion',
    title: 'Protestas por corrupcion',
    href: '/news/politica/noticia-de-protestas',
    category: 'Politica',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Miles de ciudadanos se manifestaron en distintas ciudades exigiendo transparencia y sanciones contra los responsables.',
    imageUrl: '/images/news/politica/protestas.jpg',
    alt: 'Protestas por corrupcion en el pais',
  },
  {
    id: 'descubrimiento_virus',
    title: 'Descubren un nuevo virus que alerta a cientificos',
    href: '/news/salud/noticia-del-virus',
    category: 'Salud',
    date: '9 de octubre de 2025',
    datetime: '2025-10-09',
    summary:
      'Investigadores internacionales analizan un nuevo virus que podria representar un riesgo para la salud publica global.',
    imageUrl: '/images/news/salud/virus.jpg',
    alt: 'Descubren un nuevo virus que alerta a cientificos',
  },
  {
    id: 'investigacion_homicidio',
    title: 'Investigan homicidio en el centro de la ciudad',
    href: '/news/justicia/noticia-del-homicidio',
    category: 'Justicia',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'Las autoridades iniciaron una investigacion para esclarecer las circunstancias del crimen ocurrido en una zona concurrida.',
    imageUrl: '/images/news/justicia/homicidio.jpg',
    alt: 'Investigan homicidio en el centro de la ciudad',
  },
  {
    id: 'huracan_atlantico',
    title: 'Huracan se fortalece en el Atlantico y genera alertas en la costa este de EE.UU.',
    href: '/news/clima/noticia-sobre-huracan',
    category: 'Clima',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'El fenomeno meteorologico continua intensificandose y obliga a emitir alertas preventivas en varias zonas costeras.',
    imageUrl: '/images/news/clima/ciclon.jpg',
    alt: 'Huracan se fortalece en el Atlantico y genera alertas en la costa este de EE.UU.',
  },
  {
    id: 'detencion_fraude',
    title: 'Detienen a exfuncionario acusado de fraude financiero millonario',
    href: '/news/justicia/noticia-del-fraude',
    category: 'Justicia',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'El exfuncionario fue arrestado tras ser vinculado a un esquema de fraude que habria causado perdidas millonarias al Estado.',
    imageUrl: '/images/news/justicia/arrested.jpg',
    alt: 'Detienen a exfuncionario acusado de fraude financiero millonario',
  },
  {
    id: 'bolsa_valores_alza',
    title: 'La bolsa de valores cierra en alza tras jornada de optimismo inversor',
    href: '/news/economia/noticia-de-la-bolsa',
    category: 'Economia',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Los mercados cerraron la jornada con ganancias impulsadas por el optimismo de los inversores y buenos indicadores economicos.',
    imageUrl: '/images/news/economia/bolsa-de-valores.avif',
    alt: 'La bolsa de valores cierra en alza tras jornada de optimismo inversor',
  },
];

export const latestNews: HomeArticle[] = [
  {
    id: 'tormenta_caribe',
    title: 'Tormenta tropical se aproxima al Caribe y alerta a varios paises',
    href: '/news/clima/noticia-de-la-tormenta',
    category: 'Clima',
    date: '11 de octubre de 2025',
    datetime: '2025-10-11',
    summary:
      'Una tormenta tropical se aproxima al Caribe, generando alerta en varios paises de la region. Las autoridades emiten avisos de lluvias intensas y vientos fuertes.',
    imageUrl: '/images/news/clima/tormenta.jpg',
    alt: 'Tormenta tropical se aproxima al Caribe',
  },
  {
    id: 'lakers_celtics',
    title: 'Los Lakers se imponen a los Celtics en un vibrante partido de la NBA',
    href: '/news/deporte/noticia-de-NBA',
    category: 'Deporte',
    date: '7 de octubre de 2025',
    datetime: '2025-10-07',
    summary:
      'En un emocionante enfrentamiento, los Lakers lograron imponerse a los Celtics con marcador de 112-107. LeBron James lidero con 28 puntos y 9 asistencias.',
    imageUrl: '/images/news/deporte/NBA.jpg',
    alt: 'Los Lakers vencen a los Celtics',
  },
  {
    id: 'popularidad_presidente',
    title: 'Encuestas revelan incremento en la popularidad del presidente',
    href: '/news/politica/noticia-de-encuesta',
    category: 'Politica',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'Las ultimas encuestas muestran un aumento significativo en la popularidad del presidente, reflejando respaldo creciente hacia sus politicas y gestion gubernamental.',
    imageUrl: '/images/news/politica/presidente.avif',
    alt: 'Encuesta de popularidad presidencial',
  },
  {
    id: 'olimpiadas_apertura',
    title: 'Atletas internacionales brillan en ceremonia inaugural de los Juegos Olimpicos',
    href: '/news/deporte/noticia-de-atletas',
    category: 'Deporte',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'La ceremonia inaugural reunio a atletas de mas de 200 paises en un espectaculo que combino tradicion, arte y emocion deportiva con el encendido del pebetero.',
    imageUrl: '/images/news/deporte/atletismo.jpg',
    alt: 'Ceremonia inaugural Juegos Olimpicos',
  },
  {
    id: 'resistencia_antibioticos',
    title: 'Aumenta la preocupacion por la resistencia a los antibioticos',
    href: '/news/salud/noticia-de-antibioticos',
    category: 'Salud',
    date: '9 de octubre de 2025',
    datetime: '2025-10-09',
    summary:
      'La resistencia a los antibioticos continua siendo una amenaza creciente para la salud publica. Expertos alertan sobre el uso excesivo e inadecuado de estos medicamentos.',
    imageUrl: '/images/news/salud/antibioticos.avif',
    alt: 'Resistencia a antibioticos',
  },
  {
    id: 'dolar_fortalece',
    title: 'El dolar se fortalece ante incertidumbre economica global',
    href: '/news/economia/noticia-del-dolar',
    category: 'Economia',
    date: '4 de octubre de 2025',
    datetime: '2025-10-04',
    summary:
      'El dolar estadounidense se fortalecio frente a las principales divisas, impulsado por la incertidumbre economica global y la busqueda de refugio por parte de los inversores.',
    imageUrl: '/images/news/economia/dolar.avif',
    alt: 'El dolar se fortalece',
  },
];

export const opinionArticles: OpinionArticle[] = [
  {
    id: 'opinion_politica',
    title: 'La democracia y el reto de la transparencia',
    href: '/opiniones/opinion-politica',
    summary:
      'La confianza ciudadana depende cada vez mas de instituciones abiertas y responsables.',
    imageUrl: '/images/news/politica/congreso.avif',
    alt: 'La democracia y el reto de la transparencia',
  },
  {
    id: 'opinion_economia',
    title: 'Hacia donde va la economia global?',
    href: '/opiniones/opinion-economia',
    summary:
      'Analizamos los factores que marcaran el rumbo economico en los proximos anos.',
    imageUrl: '/images/opiniones/opinion_economia.jpg',
    alt: 'Hacia donde va la economia global?',
  },
  {
    id: 'opinion_salud',
    title: 'La importancia de la salud preventiva',
    href: '/opiniones/opinion-salud',
    summary:
      'Invertir en prevencion es fundamental para mantener una poblacion saludable y reducir gastos sanitarios.',
    imageUrl: '/images/news/salud/antibioticos.avif',
    alt: 'La importancia de la salud preventiva',
  },
];
