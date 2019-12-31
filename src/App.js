import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import MainSection from './components/index';
import Nav from './components/Nav'

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <Switch>
            <Route exact path="/"><MainSection /></Route>
            <Route path="/about/"><About /></Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
