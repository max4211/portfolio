import React from 'react';
import Welcome from './components/Welcome'
import Navigation from './components/Navigation'
import About from './components/About'
import Work from './components/Work';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Card from './components/Card';
import Logo from './components/Logo';

function App() {
  return (
    <div>
      <Logo />
      <Navigation />
      <Welcome />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Card />
    </div>
  );
}

export default App;
