import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './main.css';

class Header extends Component {
    render(){
        return (
        <header className="logo-header App-header">
            <nav class="navs-flex navbar navbar-dark bg-dark">
            <span class="logo navbar-brand mb-0 h1">Recipeee...</span>
            <ul class="nav">
            <li class="nav-item">
                <Link to="/" className="nav-link"><b className="navs">Home</b></Link>
            </li>
            <li class="nav-item">
                <Link to="/contact" className="nav-link"><b className="navs">Contact</b></Link>
            </li>
            <li class="nav-item">
                <Link to="/about" className="nav-link"><b className="navs">About</b></Link>
            </li> 
            </ul>
            </nav>
      </header>
        );
    }
}

export default Header;