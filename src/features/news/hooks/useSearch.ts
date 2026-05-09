import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { newsArticles, opinionArticles } from '../../../data';
import { hasSearchQuery, matchesSearchQuery } from '../../../shared/utils/searchUtils';

/**
 * Hook para gestionar la lógica de búsqueda global de noticias y opiniones.
 * 
 * Filtra los datos centralizados basándose en el parámetro 'q' de la URL.
 * Busca tanto en los datos originales (ES) como en las traducciones del idioma activo,
 * garantizando que la búsqueda funcione en todos los idiomas del i18n.
 */
export const useSearch = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const { t, i18n } = useTranslation('data');

  const results = useMemo(() => {
    if (!hasSearchQuery(query)) return [];

    // Combinamos todas las fuentes de datos para buscar en todo el periódico
    const allContent = [
      ...newsArticles,
      ...opinionArticles
    ];

    // Filtramos por título, categoría o resumen
    // Buscamos en AMBOS: datos originales (ES) y traducciones del idioma activo
    return allContent.filter(article => {
      // 1. Búsqueda en datos originales (siempre en español)
      const matchesOriginal =
        matchesSearchQuery(article.title, query) ||
        matchesSearchQuery(article.category, query) ||
        matchesSearchQuery(article.summary, query);

      if (matchesOriginal) return true;

      // 2. Búsqueda en datos traducidos (idioma activo)
      // Solo necesario si no es español (los datos base ya son ES)
      if (i18n.language !== 'es') {
        const translatedTitle = t(`articles.${article.id}.title`, { defaultValue: '' });
        const translatedSummary = t(`articles.${article.id}.summary`, { defaultValue: '' });
        
        // Categoría traducida via el label del data.json
        const categoryKey = article.category?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const translatedCategory = t(`categories.${categoryKey}.label`, { defaultValue: '' });

        return (
          (translatedTitle && matchesSearchQuery(translatedTitle, query)) ||
          (translatedCategory && matchesSearchQuery(translatedCategory, query)) ||
          (translatedSummary && matchesSearchQuery(translatedSummary, query))
        );
      }

      return false;
    });
  }, [query, t, i18n.language]);

  return {
    query,
    results,
    count: results.length,
    isEmpty: results.length === 0 && query.length > 0,
    hasQuery: query.length > 0
  };
};
