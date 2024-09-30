// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ArticleSubmissionForm from './components/ArticleSubmissionForm';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
          <Route exact path="/" component={Home} />
          <Route path="/submit" component={ArticleSubmissionForm} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />
    </Router>
  );
};

export default App;
