import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>ToDo List</h2>
        </div>
        <List />
      </div>
    );
  }
}

export default App;
