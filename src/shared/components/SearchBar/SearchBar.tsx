import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SearchIcon } from '../icons';
import { useSearch } from '../../../features/news/hooks/useSearch';

/**
 * SearchBar
 * 
 * Componente de búsqueda global con orden dinámico:
 * Escritorio: [Input] [Lupa] (Input a la izquierda)
 * Móvil: [Lupa] [Input] (Input a la derecha)
 */
export const SearchBar = ({ onSearchComplete }: { onSearchComplete?: () => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const { results, hasQuery } = useSearch();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
        if (!searchTerm) setIsExpanded(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => inputRef.current?.focus(), 100);
      return;
    }

    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setShowResults(false);
      setSearchTerm('');
      setIsExpanded(false);
      onSearchComplete?.();
    } else {
      setIsExpanded(false);
    }
  };

  const onResultClick = () => {
    setShowResults(false);
    setSearchTerm('');
    setIsExpanded(false);
    onSearchComplete?.();
  };

  return (
    <div className="relative flex w-full lg:w-[45px] lg:h-[45px] items-center justify-center" ref={searchRef}>
      <form 
        className="flex w-full items-center lg:flex-row lg:justify-center" 
        role="search" 
        onSubmit={handleSearch}
      >
        {/* Lupa: Primero en el DOM para móvil, pero se puede mover en desktop si es necesario. 
            Sin embargo, para mantener el input a la izquierda en desktop, el input debe ir antes en el DOM 
            y usar flex-row-reverse o similar.
        */}

        {/* Desktop: El input va antes [Input][Lupa]
            Mobile: Queremos [Lupa][Input]
        */}
        <div className="flex w-full items-center lg:flex-row-reverse">
          
          {/* Botón de la lupa */}
          <button
            className={`flex h-[45px] w-[45px] flex-shrink-0 items-center justify-center rounded-md border border-transparent transition-all duration-300 ${
              isExpanded ? 'bg-[#dc3545] text-white' : 'text-black hover:bg-[#dc3545] hover:text-white dark:text-gray-300 dark:hover:bg-[#dc3545] dark:hover:text-white'
            }`}
            type="submit"
            aria-label={isExpanded ? 'Ejecutar búsqueda' : 'Abrir buscador'}
          >
            <SearchIcon className="h-[1.3rem] w-[1.3rem]" />
          </button>

          {/* Input */}
          <div 
            className={`transition-all duration-500 ease-in-out ${
              isExpanded 
                ? 'flex-1 opacity-100 scale-100 ml-2 lg:ml-0 lg:mr-2' 
                : 'w-0 opacity-0 scale-95 pointer-events-none'
            } lg:absolute lg:right-full lg:flex-none lg:w-[300px]`}
          >
            <input
              ref={inputRef}
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
              className="w-full rounded-md border border-gray-300 py-2 px-4 italic text-base focus:border-[#dc3545] focus:outline-none dark:border-gray-700 dark:bg-gray-800"
            />

            {/* Dropdown de Resultados Rápidos */}
            {isExpanded && showResults && hasQuery && results.length > 0 && (
              <ul className="absolute left-0 right-0 top-full z-[100] mt-2 overflow-hidden rounded-md border border-gray-200 bg-white shadow-2xl dark:border-gray-700 dark:bg-gray-800">
                {results.slice(0, 6).map((article) => (
                  <li key={article.id} className="border-b border-gray-50 last:border-0 dark:border-gray-700">
                    <Link
                      to={article.href}
                      onClick={onResultClick}
                      className="flex items-center gap-3 p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                    >

                      {article.imageUrl && (
                        <img 
                          src={article.imageUrl} 
                          alt="" 
                          className="h-10 w-10 rounded object-cover"
                        />
                      )}
                      <div className="flex-1 overflow-hidden">
                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {article.title}
                        </p>
                        <span className="text-[10px] font-bold uppercase text-[#dc3545]">
                          {article.category}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
