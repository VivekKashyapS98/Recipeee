import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Recipe from './components/recipe';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Recipe} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
