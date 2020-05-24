import React from 'react';
import Welcome from './components/welcome/Welcome'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Work from './components/work/Work';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Card from './components/contact/Card';
import Logo from './components/nav/Logo';
import RoleTab from './components/experience/RoleTab';

function App() {
  return (
    <div>
      <Logo />
      <Navigation />
      <Welcome />
      <About />
      <Experience />
      <RoleTab/>
      <Work />
      <Contact />
      <Card />
    </div>
  );
}

export default App;
