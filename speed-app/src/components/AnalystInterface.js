// src/components/AnalystInterface.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const AnalystInterface = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [analysisData, setAnalysisData] = useState({
    practice: '',
    claim: '',
    evidence: '',
    researchType: '',
  });

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get('/api/accepted'); // Adjust the API endpoint
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  const handleAnalyze = async (article) => {
    setSelectedArticle(article);
  };

  const handleSubmit = async () => {
    await axios.post('/api/analyze', { articleId: selectedArticle.id, ...analysisData });
    setSelectedArticle(null);
    setAnalysisData({ practice: '', claim: '', evidence: '', researchType: '' });
    // Optionally refresh articles
  };

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Authors</TableCell>
            <TableCell>Journal</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map(article => (
            <TableRow key={article.id}>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.authors}</TableCell>
              <TableCell>{article.journal}</TableCell>
              <TableCell>{article.year}</TableCell>
              <TableCell>
                <Button onClick={() => handleAnalyze(article)} color="primary">Analyze</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {selectedArticle && (
        <div>
          <h3>Analyzing: {selectedArticle.title}</h3>
          <TextField
            label="SE Practice"
            value={analysisData.practice}
            onChange={(e) => setAnalysisData({ ...analysisData, practice: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Claim"
            value={analysisData.claim}
            onChange={(e) => setAnalysisData({ ...analysisData, claim: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Evidence Result"
            value={analysisData.evidence}
            onChange={(e) => setAnalysisData({ ...analysisData, evidence: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Research Type"
            value={analysisData.researchType}
            onChange={(e) => setAnalysisData({ ...analysisData, researchType: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSubmit} color="primary">Submit Analysis</Button>
        </div>
      )}
    </div>
  );
};

export default AnalystInterface;
