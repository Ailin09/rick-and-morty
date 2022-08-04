import React from "react";

const Search = ({ setSearch, setPageNumber }) => {
  let searchBtn = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <div className="input-group mb-3">
        <input
          onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
          }}
          placeholder="Search for characters"
          type="text"
          className="p-2 color-white bg-dark border-3"
        />
        <button className="btn btn-dark p-2 border-3" onClick={searchBtn}>
          Search
        </button>
      </div>
    </form>
  );
};
export default Search;
