import React from 'react';
import logo from './logo.svg';
import './App.css';
import LazyHero from 'react-lazy-hero';

function App() {
  return (
    <div className="App">
      <section id="intro">
      <h1>Sarah Wood</h1>
      <h2>Personal Portfolio</h2>
      <navbar>
        <ul>
          <li>
          <a href="#about">About Me</a>
          </li>
          <li>
          <a href="#projects">Projects</a>
          </li>
          <li>
          <a href="#skills">Skills</a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
        </ul>
      </navbar>
      </section>
    </div>
    
  );
}

export default App;
