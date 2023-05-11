import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { getTitlesForSearchBar } from "../hasura/getTitlesForSearchBar";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [titles, setTitles] = useState([]);

  useEffect(() => {
    getTitlesForSearchBar().then((x) => {
      let temp = x.blog_blog_posts.reduce((a, c) => {
        return [...a, c.title];
      }, []);
      setTitles(temp);
    });
  }, []);

  const handleInputChange = (event, value) => {
    setSearchValue(value);
    const results = titles.filter((entry) =>
      new RegExp(value, "i").test(entry)
    );
    setSearchResults(results);
  };

  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={searchResults.slice(0, 10)}
      // sx={{ width: "100vw" }}
      renderInput={(params) => (
        <TextField {...params} label="Search" onChange={handleInputChange} />
      )}
    />
  );
};
export default SearchBar;
