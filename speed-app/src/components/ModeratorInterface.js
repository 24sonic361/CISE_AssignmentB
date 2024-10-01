// src/components/ModeratorInterface.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const ModeratorInterface = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles to moderate from your backend
    const fetchArticles = async () => {
      const response = await axios.get('/api/moderate'); // Adjust the API endpoint
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  const handleDecision = async (articleId, decision) => {
    await axios.post(`/api/moderate/${articleId}`, { decision });
    // Refresh articles after decision
    setArticles(articles.filter(article => article.id !== articleId));
  };

  return (
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
              <Button onClick={() => handleDecision(article.id, 'accept')} color="primary">Accept</Button>
              <Button onClick={() => handleDecision(article.id, 'reject')} color="secondary">Reject</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ModeratorInterface;
