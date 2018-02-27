import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1> Welcome To My Portfolio! </h1>
        <h2> Greg Wallerus </h2>
        <p> I am a Full Stack Software Developer with a passion for learning. My main stack is the MEAN stack but I am currently learning React and Java to further enhance my skills. </p>
        <p> Feel free to check out my LinkedIn or GitHub, or send me a message if you would like to connect! </p>
        <img src="../images/Greg.jpg" />
      </div>
    );
  }
}

export default App;
