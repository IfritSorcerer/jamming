import React from "react";
import TrackListing from "../Track/TrackListing";

import "../../styles/SearchResults.css";

const SearchResults = (props) => {
  
  return (
    <>
    <div className="SearchResults">
      <h2>Results:</h2>
      <section>
        <TrackListing  
          tracks={props.searchResults} 
          onAdd={props.onAdd}/>
      </section>
    </div>
    </>
  );
};

export default SearchResults;
