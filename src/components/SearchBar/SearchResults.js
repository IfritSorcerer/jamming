import React from "react";
import TrackListing from "../Track/TrackListing";

const SearchResults = (props) => {
  
  return (
    <div>
      <h2>Results:</h2>
      
      <TrackListing  tracks={props.SearchResults} onAdd={props.onAdd}/>
    </div>
  );
};

export default SearchResults;
