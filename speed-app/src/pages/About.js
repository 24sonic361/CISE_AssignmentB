// src/pages/About.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About SPEED
      </Typography>
      <Typography variant="body1" paragraph>
        The Software Practice Empirical Evidence Database (SPEED) is a platform designed to help 
        software engineers, researchers, and students make informed decisions about software 
        engineering practices by providing access to empirical evidence.
      </Typography>
      <Typography variant="body1" paragraph>
        SPEED aims to bridge the gap between academic research and practical application, 
        allowing users to easily search for, view, and analyze evidence related to different 
        software engineering practices such as Test-Driven Development (TDD), Agile methodologies, 
        and more.
      </Typography>
      <Typography variant="body1" paragraph>
        By providing a database of peer-reviewed research articles, SPEED ensures that software 
        engineers have access to high-quality, evidence-based insights to guide their decision-making 
        process. Whether you're a practitioner looking to validate a claim or a student exploring 
        best practices, SPEED is here to assist.
      </Typography>
      <Typography variant="body1" paragraph>
        Key features include:
      </Typography>
      <ul>
        <li>Searchable database of software engineering practices</li>
        <li>Empirical evidence for or against specific claims</li>
        <li>User-submitted articles vetted by expert moderators</li>
        <li>Detailed analysis and easy-to-read summaries</li>
        <li>Ratings and feedback on individual articles</li>
      </ul>
      <Typography variant="body1" paragraph>
        Start exploring today and make informed decisions about the software practices you implement!
      </Typography>
    </Container>
  );
};

export default About;
