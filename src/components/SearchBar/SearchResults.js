import TrackListing from "../Track/TrackListing";

import "../../styles/SearchResults.css";

const SearchResults = ({searchResults, onAdd}) => {
  
  return (
    <div className="SearchResults">
      <h2 className="ResultsHeader">Results:</h2>
      <section>
        <TrackListing  
          tracks={searchResults} 
          onAdd={onAdd}/>
      </section>
    </div>
  );
};

export default SearchResults;
