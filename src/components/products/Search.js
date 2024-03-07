import React from "react";

export const Search = () => {
  return (
    <div>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="lista regalos available"
          />
          <button type="submit" class="searchButton">
            &#128270;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
