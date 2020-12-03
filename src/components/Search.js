import React from "react";
import searchUtils from "../utils/searchUtils";
const Search = function () {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          type="search"
          name="searchElement"
          id="searchElement"
          onFocus={searchUtils.onFocusAddClass}
          onBlur={searchUtils.onBlurRemoveClass}
          className="prompt"
          placeholder="Search for an item"
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default Search;
