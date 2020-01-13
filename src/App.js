import React from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import MainSection from './components/index';
import Nav from './components/Nav';
import Thunk from './containers/Thunk';
import Saga from './containers/Saga';
import Observable from './containers/Observable';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <Switch>
            <Route exact path="/"><MainSection /></Route>
            <Route path="/Thunk/"><Thunk /></Route>
            <Route path="/Saga/"><Saga /></Route>
            <Route path="/Observable/"><Observable /></Route> 
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
