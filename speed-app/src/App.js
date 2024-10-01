// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ArticleSubmissionForm from './components/ArticleSubmissionForm';
import Search from './components/Search';
import ModeratorInterface from './components/ModeratorInterface'; // Import the moderator interface
import AnalystInterface from './components/AnalystInterface'; // Import the analyst interface

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submit" element={<ArticleSubmissionForm />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/moderate" element={<ModeratorInterface />} /> {/* Add moderator route */}
        <Route path="/analyze" element={<AnalystInterface />} /> {/* Add analyst route */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

