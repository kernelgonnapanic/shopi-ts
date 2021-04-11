import React, { ChangeEvent } from 'react';

import { SearchBarWrapper } from './SearchBar.styles';

type SearchBarProps = {
  searchInputContent: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchInputContent, handleInputChange }) => {
  return (
    <SearchBarWrapper>
      <label htmlFor="search">search title:</label>
      <input
        type="text"
        placeholder="book title"
        value={searchInputContent}
        onChange={handleInputChange}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
