import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="intro">
      <h1>Sarah Wood</h1>
      <h2>Personal Portfolio</h2>
      <navbar>
        <ul>
          <li>
          <a href="About">About Me</a>
          </li>
          <li>
          <a href="Projects">Projects</a>
          </li>
          <li>
          <a href="Skills">Skills</a>
          </li>
          <li>
          <a href="Contact">Contact</a>
          </li>
        </ul>
      </navbar>
      </section>
    </div>
    
  );
}

export default App;
