import React from 'react';
import { SearchIcon } from '../../../../shared/components/icons';

export const SearchBar = () => {
  return (
    <form className="flex w-full lg:w-auto mt-3 lg:mt-0 gap-2" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#dc3545] focus:ring-4 focus:ring-[rgba(220,53,69,0.25)] dark:bg-gray-800 dark:border-gray-700 italic transition-all duration-300"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
      <button 
        className="w-[45px] h-[45px] flex items-center justify-center p-2 rounded-md border border-transparent text-black hover:bg-[#dc3545] hover:text-white dark:text-gray-300 dark:hover:bg-[#dc3545] transition-all duration-300 focus:outline-none"
        type="submit"
        aria-label="Buscar"
      >
        <SearchIcon className="w-4 h-4" />
      </button>
    </form>
  );
};
