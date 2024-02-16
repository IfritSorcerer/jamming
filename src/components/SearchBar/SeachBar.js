import React, { useCallback, useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  return (
    <div>
      <input
        placeholder="What are you Jamming to?"
        onChange={handleTermChange}
      />
      <button type='button'onClick={search}>Search</button>
    </div>
  );
};

export default SearchBar;
