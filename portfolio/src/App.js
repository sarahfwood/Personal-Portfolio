import React from 'react';
import logo from './logo.svg';
import './App.css';
import LazyHero from 'react-lazy-hero';

export default MyLandingPage() {
  return (
      <div>
          <LazyHero imageSrc="https://unsplash.it/2000/1000">
              <h1>Generic Startup Hype Headline</h1>
          </LazyHero>

          {/* ... */}
      </div>
  );
}

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
