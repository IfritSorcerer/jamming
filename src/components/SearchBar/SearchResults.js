import React from "react";

const SearchResults = (props) => {
  return (
    <>
      <h2>Results:</h2>
      {props.children}
    </>
  );
};

export default SearchResults;
