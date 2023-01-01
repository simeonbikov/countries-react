import React from "react";

const SearchInput = (props) => {
  return (
    <input
      id="searchInput"
      type="text"
      placeholder="Search for a Country or Capital ..."
      onChange={props.handleChange}
      onClick={props.handleClick}
    />
  );
};

export default SearchInput;
