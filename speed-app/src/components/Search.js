// src/components/Search.js
import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import ResultTable from './ResultTable';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Call backend API to search for articles (dummy data here)
      const response = await axios.get('/api/search', { params: { query: searchTerm } });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results", error);
    }
  };

  return (
    <div>
      <TextField
        label="Search SE Practice"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>

      {results.length > 0 && <ResultTable data={results} />}
    </div>
  );
};

export default Search;
