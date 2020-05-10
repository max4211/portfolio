import React from 'react';
import Navigation from './components/Navigation'
import About from './components/About'
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Work />
      <Experience />
      <Contact />
      <Card />
    </div>
  );
}

export default App;
