import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome To My Portfolio</h1>
          </header>
          <h2> Greg Wallerus </h2>
          <p> I am a Full Stack Software Developer with a passion for learning. I primarily have worked with the MEAN stack but I am currently learning React and Java to further enhance my skills. </p>
          <p> Feel free to check out my LinkedIn or GitHub, or send me a message if you would like to connect! </p>
          <img alt="me" class="pic" src="./images/Greg.jpg" />
          <br />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gregwallerus/"><img alt="LinkedIn" class="icon" src="./images/linkedIn.png" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wally142"><img alt="GitHub" class="icon" src="./images/github.png" /></a>
          <h2> Projects </h2>
        </div>
        <div className="App">
          <h3>Happier Hours<a target="_blank" rel="noopener noreferrer" href="https://solo-project.herokuapp.com/">HappierHours.com</a></h3>
          <img alt="Happier Hours" class="pic1" src="./images/listView.png" />
        </div>
        <div className="App">
          <h3>Grow North<a target="_blank" rel="noopener noreferrer" href="https://grownorthdemo.herokuapp.com/">GrowNorthDemo.com</a></h3>
          <img alt="Grow North" class="pic1" src="./images/dashboard.png" />
        </div>
        <div className="App">
          <h3>Wedding Website<a target="_blank" rel="noopener noreferrer" href="http://www.gregandivonnewedding.com/">GregAndIvonneWedding.com</a></h3>
          <img alt="My Wedding Page" class="pic1" src="./images/wedding.png" />
        </div>
      </div>
    );
  }
}

export default App;
