import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    var helloWorld = 'Welcome to the Road to learn React'
    var logoReact = 'Cool Beans'
    return (
      <div className="App">
        <h2>{helloWorld}</h2>
        <h1>{logoReact}</h1>
      </div>
    );
  }
}

export default App;
