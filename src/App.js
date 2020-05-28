import React from 'react';
import Welcome from './components/welcome/Welcome'
import Navigation from './components/nav/Navigation'
import About from './components/about/About'
import Work from './components/work/Work';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

class App extends React.Component {


  componentDidMount() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

  render() {

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
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
