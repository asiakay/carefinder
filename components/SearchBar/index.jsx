import React from "react";

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
