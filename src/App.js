import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Firepad Collaborative Editing & React Hello-World</h1>
        </header>
        <main>
          <Editor />
        </main>
      </div>
    );
  }
}

export default App;
