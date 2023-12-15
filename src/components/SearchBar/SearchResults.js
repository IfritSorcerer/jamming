import React from "react";

// One thing that might work is for this to become a container for stuff.
// Like a thing containing tracklist or playlist for example.

// also another pro tip, instead of using (props)
// you can do something like ({ children }) where
// children is just the name of the prop that you
// pass to the component. This is called object destructuring
// and is just another "advanced" thing https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// long story short it just is like this:
// const name = person.name
// const { name } = person
// these two lines mean the same thing ✅
const SearchResults = (props) => {
  return (
    <>
      <h2>Results:</h2>
      {props.children} {/* could also turn this into */}
    </>
  );
};

export default SearchResults;
