import React from "react";

const onFocusAddClass = function () {
  let searchElement = document.querySelector("#searchElement");
  searchElement.parentElement.parentElement.classList.add("loading");
};
const onBlurRemoveClass = function () {
  let searchElement = document.querySelector("#searchElement");
  searchElement.parentElement.parentElement.classList.remove("loading");
};
const Search = function () {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          type="search"
          name="searchElement"
          id="searchElement"
          onFocus={onFocusAddClass}
          onBlur={onBlurRemoveClass}
          className="prompt"
          placeholder="Search for an item"
        />
        <i className="search icon"></i>
      </div>
    </div>
  );
};

export default Search;
