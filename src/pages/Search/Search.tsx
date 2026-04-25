import React from 'react';
import { Link } from 'react-router-dom';
import { NewsLayout } from '../../shared/layouts';
import { useSearch } from '../../features/news/hooks/useSearch';
import { SearchIcon } from '../../shared/components/icons';

/**
 * Search Page - Réplica exacta del proyecto Bootstrap
 */
const Search = () => {
  const { query, results, count, hasQuery, isEmpty } = useSearch();

  return (
    <NewsLayout>
      <div className="container py-5">
        {hasQuery ? (
          isEmpty ? (
            /* Vista: Sin Resultados (Clon de Bootstrap) */
            <div className="text-center py-5">
              <div className="mb-4">
                <SearchIcon className="h-16 w-16 text-gray-400 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No se encontraron resultados</h3>
              <p className="text-muted mb-4">Intenta con otros términos como "economía", "deporte" o "inflación".</p>
              <Link 
                to="/" 
                className="inline-block bg-[#dc3545] text-white px-8 py-3 rounded-md font-bold hover:bg-[#c82333] transition-all transform hover:-translate-y-px no-underline"
              >
                Volver al inicio
              </Link>
            </div>
          ) : (
            /* Vista: Con Resultados (Clon de Bootstrap) */
            <>
              <div className="row mb-4">
                <div className="col-12 border-bottom pb-3">
                  <h2 className="text-2xl font-bold">
                    Resultados de búsqueda para: <span className="text-[#dc3545]">"{query}"</span>
                  </h2>
                  <p className="text-muted mt-2">Se encontraron {count} noticias relacionadas.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {results.map((article) => (
                  <article key={article.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                    <Link to={article.href} className="no-underline text-inherit flex flex-col h-full">
                      <img 
                        src={article.imageUrl} 
                        alt={article.alt} 
                        className="w-full h-[200px] object-cover"
                      />
                      <div className="p-4 flex flex-col flex-grow">
                        <span className="inline-block bg-[#dc3545] text-white text-xs font-bold px-2 py-1 rounded mb-2 self-start uppercase">
                          {article.category}
                        </span>
                        <h3 className="text-xl font-bold mb-2 leading-tight dark:text-white">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          {article.date}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow mb-4">
                          {article.summary}
                        </p>
                        <span className="text-[#dc3545] font-bold mt-auto flex items-center gap-1 group">
                          Leer más 
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </>
          )
        ) : (
          /* Vista: Sin Búsqueda Activa */
          <div className="container py-5 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Qué estás buscando?</h2>
            <p className="text-muted mb-8">Usa el buscador para encontrar las últimas noticias</p>
            <Link 
              to="/" 
              className="inline-block bg-[#dc3545] text-white px-8 py-3 rounded-md font-bold hover:bg-[#c82333] transition-all no-underline"
            >
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </NewsLayout>
  );
};

export default Search;
