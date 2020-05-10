import React from 'react';
import Navigation from './Navigation'
import About from './About'
import Work from './Work';
import Experience from './Experience';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Work />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
