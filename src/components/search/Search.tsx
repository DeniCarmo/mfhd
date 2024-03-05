import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div id="search" className="w-full flex items-center justify-center">
      <div className="w-full max-w-3xl h-auto min-h-11 relative">
        <input
          type="text"
          className="font-sans text-base font-normal text-white placeholder:text-white w-full h-auto bg-transparent min-h-11 outline-none border-b border-white pl-2"
          value={query}
          placeholder="Looking for something to watch?"
          onChange={handleSearch}
        />
        <FaSearch className="absolute right-1 top-[50%] -translate-y-[50%] cursor-pointer text-white" />
      </div>
    </div>
  );
};
