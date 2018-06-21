import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom';
import routes from './routes';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <Link
              style={{ color: 'white', marginRight: '20px' }}
              to="/products"
            >
              All Products
            </Link>
            <Link style={{ color: 'white' }} to="/products/new">
              Add New Product
            </Link>
          </header>

          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
