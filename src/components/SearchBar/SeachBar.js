import React from 'react';

function SearchBar() {
    return (
        <div id='search-bar'>
            <label htmlFor='search-bar'>What are you jamming to??</label>
            <input 
                id='search-bar'
                type='text'  
             />
            <button>
                Submit
            </button>
        </div>
    )
};

export default SearchBar;