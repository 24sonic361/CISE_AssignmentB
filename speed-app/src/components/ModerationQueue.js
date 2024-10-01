import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Container, Typography } from '@mui/material';

const mockArticles = [
  { id: 1, title: 'Test-Driven Development', authors: 'Author 1', journal: 'SE Journal', year: 2023 },
  { id: 2, title: 'Agile Practices', authors: 'Author 2', journal: 'Software Engineering', year: 2022 }
];

const ModerationQueue = () => {
  const [articles, setArticles] = useState(mockArticles);

  const handleApprove = (id) => {
    setArticles(articles.filter(article => article.id !== id));
    // Here, make an API call to approve the article
  };

  const handleReject = (id) => {
    setArticles(articles.filter(article => article.id !== id));
    // Here, make an API call to reject the article
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Moderation Queue</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Authors</TableCell>
            <TableCell>Journal</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.authors}</TableCell>
              <TableCell>{article.journal}</TableCell>
              <TableCell>{article.year}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" onClick={() => handleApprove(article.id)}>Approve</Button>
                <Button variant="contained" color="secondary" onClick={() => handleReject(article.id)} style={{ marginLeft: '10px' }}>Reject</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default ModerationQueue;
