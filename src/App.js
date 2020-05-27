import React from 'react';
import Welcome from './components/welcome/Welcome'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Work from './components/work/Work';
import Experience from './components/experience/Experience';
import Card from './components/contact/Card';
import './App.css';

function App() {
  return (
    <div>
      <div id="nav-div">
        <Navigation />
      </div>
      <div id="content">
        <Welcome />
        <About />
        <Experience />

        <Work />
        <Card />
      </div>
    </div>
  );
}

export default App;
