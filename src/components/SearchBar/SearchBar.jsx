import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  const passTerm = () => {
    if (searchTerm) {
      onSearch(searchTerm); 
    } else {
      alert("Please enter a search term");
    }
  };

  return (
    <div className={styles.SearchBar}>
      <div className={styles.InputContainer}>
        <input
          type="text"
          placeholder="Search Reddit"
          id="searchBar"
          value={searchTerm}
          onChange={handleSearch}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              passTerm();
            }
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
