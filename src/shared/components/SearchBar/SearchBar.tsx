import { SearchIcon } from '../icons';

/**
 * SearchBar
 * 
 * Componente de búsqueda global reutilizable.
 */
export const SearchBar = () => {
  return (
    <form className="mt-3 flex w-full gap-1 lg:mt-0 lg:w-auto" role="search" onSubmit={(e) => e.preventDefault()}>
      <div className="relative flex-1 lg:flex-none">
        <input
          type="search"
          placeholder="Buscar noticias..."
          aria-label="Search"
          className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 italic text-base transition-all duration-300 focus:border-[#dc3545] focus:outline-none focus:ring-4 focus:ring-[rgba(220,53,69,0.25)] dark:border-gray-700 dark:bg-gray-800 lg:hidden lg:w-0 lg:border-0 lg:p-0"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 lg:hidden">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <button
        className="flex h-[45px] w-[45px] items-center justify-center rounded-md border border-transparent p-0 text-black transition-all duration-300 hover:bg-[#dc3545] hover:text-white dark:text-gray-300 dark:hover:bg-[#dc3545]"
        type="submit"
        aria-label="Buscar"
      >
        <SearchIcon className="h-[1.3rem] w-[1.3rem]" />
      </button>
    </form>
  );
};
