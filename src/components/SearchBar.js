import React, { useState } from "react";

const SearchBar = ({ fetchWeather }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (!input) return;
    fetchWeather(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
