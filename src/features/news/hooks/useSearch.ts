import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { newsArticles, opinionArticles, type NewsArticle } from '../../../data';
import { hasSearchQuery, matchesSearchQuery } from '../../../shared/utils/searchUtils';

/**
 * Hook para gestionar la lógica de búsqueda global de noticias y opiniones.
 * 
 * Filtra los datos centralizados basándose en el parámetro 'q' de la URL.
 */
export const useSearch = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const results = useMemo(() => {
    if (!hasSearchQuery(query)) return [];

    // Combinamos todas las fuentes de datos para buscar en todo el periódico
    const allContent = [
      ...newsArticles,
      ...opinionArticles
    ];


    // Filtramos por título, categoría o resumen
    return allContent.filter(article => 
      matchesSearchQuery(article.title, query) ||
      matchesSearchQuery(article.category, query) ||
      matchesSearchQuery(article.summary, query)
    );
  }, [query]);

  return {
    query,
    results,
    count: results.length,
    isEmpty: results.length === 0 && query.length > 0,
    hasQuery: query.length > 0
  };
};
