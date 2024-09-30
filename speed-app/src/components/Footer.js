// src/components/Footer.js
import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '20px', marginTop: '20px', backgroundColor: '#f8f8f8' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 SPEED Database. All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
