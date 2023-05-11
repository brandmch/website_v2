import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const SearchBar = ({ data }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = (event, value) => {
    setSearchValue(value);
    const results = data.filter((entry) => new RegExp(value, "i").test(entry));
    setSearchResults(results);
  };
  return (
    <Autocomplete
      disablePortal
      id="search-bar"
      options={searchResults}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search" onChange={handleInputChange} />
      )}
    />
  );
};
export default SearchBar;
