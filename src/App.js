import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Codepolitan</Link>
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/premium">Premium</Link>
              <Link className="nav-item nav-link" to="/devschool">DevSchool</Link>
            </div>
          </nav>
          <Route path="/" exact component={ () => <h4>Home</h4> }></Route>
          <Route path="/premium" component={ () => <h4>Premium</h4> }></Route>
          <Route path="/devschool" component={ () => <h4>Devschool</h4> }></Route>
        </div>
      </Router>
    );
  }
}

export default App;
