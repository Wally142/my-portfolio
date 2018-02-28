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
        <p> I am a Full Stack Software Developer with a passion for learning. I primarily have worked with the MEAN stack but I am currently learning React and Java to further enhance my skills. </p>
        <p> Feel free to check out my LinkedIn or GitHub, or send me a message if you would like to connect! </p>
        <img alt="me" class="pic" src="./images/Greg.jpg" />
        <br />
        <a target="_blank" href="https://www.linkedin.com/in/gregwallerus/"><img alt="LinkedIn" class ="icon" src="./images/linkedIn.png" /></a>
        <a target="_blank" href="https://github.com/Wally142"><img alt="GitHub" class="icon" src="./images/github.png" /></a>
      </div>
    );
  }
}

export default App;
