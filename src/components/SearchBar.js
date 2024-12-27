import React from 'react';

function SearchBar({ placeholder, handleSearch }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={(e) => handleSearch(e.target.value)}
      className="border p-2 rounded w-full mb-4"
    />
  );
}

export default SearchBar;
