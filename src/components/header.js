import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return (
        <header className="App-header">
            <nav class="navs-flex navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">Recipeee...</span>
            <div className="navs-links">
                <Link to="/" className="nav-link navs-link">Home</Link>
                <Link to="/contact" className="nav-link navs-link">Contact</Link>
                <Link to="/about" className="nav-link navs-link">About</Link>
             </div>
            </nav>
      </header>
        );
    }
}

export default Header;