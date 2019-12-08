import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TaskList from './components/taskList.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>Trello Clone (Single Board)</h1>
          <Route path='/' exact component={TaskList}/>
        </div>
      </Router>
    );
  }
}

export default App;
