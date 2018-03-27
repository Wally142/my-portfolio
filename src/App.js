import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome To My Portfolio!</h1>
          </header>
          <h1> Greg Wallerus </h1>
          <h3>Consultant at Gensis10</h3>
          <p> I am a Full Stack Software Developer with a passion for learning. I primarily have worked with the MEAN stack but I am currently learning React and Java to further enhance my skills. </p>
          <p> Feel free to check out my LinkedIn or GitHub</p>
          <img alt="me" class="pic" src="./images/Greg.jpg" />
          <br />
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gregwallerus/"><img alt="LinkedIn" class="icon" src="./images/linkedIn.png" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/Wally142"><img alt="GitHub" class="icon" src="./images/github.png" /></a>
          <h1> Projects </h1>
        </div>
        <div className="App">
          <h2>Happier Hours</h2>
          <h4><a target="_blank" rel="noopener noreferrer" href="https://solo-project.herokuapp.com/">HappierHours.com</a></h4>
          <img alt="Happier Hours" class="pic1" src="./images/listView.png" />
        </div>
        <div className="App">
          <h2>Grow North</h2>
          <h4><a target="_blank" rel="noopener noreferrer" href="https://grownorthdemo.herokuapp.com/">GrowNorthDemo.com</a></h4>
          <img alt="Grow North" class="pic1" src="./images/dashboard.png" />
        </div>
        <br />
        <br />
        <div className="App">
          <h2>Wedding Website</h2>
          <h4><a target="_blank" rel="noopener noreferrer" href="http://www.gregandivonnewedding.com/">GregAndIvonneWedding.com</a></h4>
          <img alt="My Wedding Page" class="pic1" src="./images/wedding.png" />
        </div>
      </div>
    );
  }
}

export default App;
