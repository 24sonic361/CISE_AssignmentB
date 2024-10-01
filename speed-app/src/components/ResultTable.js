// src/components/ResultTable.js
import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';

const ResultTable = ({ data }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
        <TableCell>Rating</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Authors</TableCell>
          <TableCell>Journal</TableCell>
          <TableCell>Year</TableCell>
          <TableCell>DOI</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((article, index) => (
          <TableRow key={index}>
            <TableCell>{article.title}</TableCell>
            <TableCell>{article.authors}</TableCell>
            <TableCell>{article.journal}</TableCell>
            <TableCell>{article.year}</TableCell>
            <TableCell>{article.doi}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ResultTable;
