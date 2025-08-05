import React, { useCallback, useState } from "react";

import "../../styles/SearchBar.css";

const SearchBar = ({ onSearch}) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    onSearch(term);
  }, [onSearch, term]);

  return (
    <div className="SearchInput">
      <input
        placeholder="What are you Jamming to?"
        onChange={handleTermChange}
      />
      <button 
        className="SearchButton"
        type='button'
        onClick={search}>Search</button>
    </div>
  );
};

export default SearchBar;
