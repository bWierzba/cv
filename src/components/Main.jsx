import React from 'react';
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import '../css/Main.css'

class Main extends React.Component {
  render() {
    return (
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    );
  }

}

export default Main;