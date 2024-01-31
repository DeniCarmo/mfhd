import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from 'react';

export const Search = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const { name, value } = e.target;
    setQuery((v) => ({ ...v, [name]: value }));
  };

  return (
    <div id="search" className="search">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          value={query.value}
          placeholder="Looking for something to watch?"
          onChange={handleSearch}
        />
        <SearchOutlinedIcon className="search-icon" style={{ color: '#a0a0a0' }} />
      </div>
    </div>
  );
};
