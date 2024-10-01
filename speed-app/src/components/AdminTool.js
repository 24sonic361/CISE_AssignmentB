import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, TextField } from '@mui/material';

const AdminTool = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: 'Test-Driven Development', authors: 'Author 1', journal: 'SE Journal', year: 2023, doi: '12345' }
  ]);
  const [editId, setEditId] = useState(null);
  const [editValues, setEditValues] = useState({ title: '', authors: '', journal: '', year: '', doi: '' });

  const handleEdit = (article) => {
    setEditId(article.id);
    setEditValues(article);
  };

  const handleSave = () => {
    setArticles(articles.map(article => (article.id === editId ? editValues : article)));
    setEditId(null);
    // API call to save changes can go here
  };

  return (
    <div>
      <h2>Admin Data Configuration</h2>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Authors</TableCell>
            <TableCell>Journal</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>DOI</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map(article => (
            <TableRow key={article.id}>
              <TableCell>{editId === article.id ? <TextField value={editValues.title} onChange={(e) => setEditValues({ ...editValues, title: e.target.value })} /> : article.title}</TableCell>
              <TableCell>{editId === article.id ? <TextField value={editValues.authors} onChange={(e) => setEditValues({ ...editValues, authors: e.target.value })} /> : article.authors}</TableCell>
              <TableCell>{editId === article.id ? <TextField value={editValues.journal} onChange={(e) => setEditValues({ ...editValues, journal: e.target.value })} /> : article.journal}</TableCell>
              <TableCell>{editId === article.id ? <TextField value={editValues.year} onChange={(e) => setEditValues({ ...editValues, year: e.target.value })} /> : article.year}</TableCell>
              <TableCell>{editId === article.id ? <TextField value={editValues.doi} onChange={(e) => setEditValues({ ...editValues, doi: e.target.value })} /> : article.doi}</TableCell>
              <TableCell>
                {editId === article.id ? (
                  <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
                ) : (
                  <Button variant="contained" onClick={() => handleEdit(article)}>Edit</Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminTool;
