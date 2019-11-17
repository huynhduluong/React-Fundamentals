import React, { Component } from 'react';
import Intro from './component/Intro/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series Lists</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>
      </div>
    );
  }
}
export default App;
