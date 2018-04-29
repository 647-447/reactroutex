import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Status Report</h1>
          <h2 className="Red-text">FIRE. Risk Assessment: High</h2>
          <h3 className="Red-text">PD: Please evacuate away from the hills.</h3>
          <br></br>
          <button type="button" className="Safe-button">SAFE</button>
          <button type="button" className="Danger-button">DANGER</button>


        </header>
      </div>
    );
  }
}

export default App;
