import React from 'react';
import { SearchIcon } from '../../../../shared/components/icons';

export const SearchBar = () => {
  return (
    <form className="flex w-full lg:w-auto mt-3 lg:mt-0" role="search" onSubmit={(e) => e.preventDefault()}>
      <input 
        className="w-full lg:w-64 px-3 py-1.5 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" 
        type="search" 
        placeholder="Buscar noticias..." 
        aria-label="Search" 
      />
      <button 
        className="px-3 py-1.5 text-blue-600 border border-blue-600 rounded-r-md hover:bg-blue-600 hover:text-white transition-colors dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900" 
        type="submit"
        aria-label="Buscar"
      >
        <SearchIcon className="w-4 h-4" />
      </button>
    </form>
  );
};
