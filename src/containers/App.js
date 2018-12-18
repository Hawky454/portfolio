import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    hover: false
  };

  render() {
    return (
      <div className="app">
        <div className="app-background" />
        <div className="app-container">
          <header className="app-header">
            <h1 className="app-title">David Miller</h1>
            <i className="app-barcode fas fa-barcode fa-7x" />
            <h3 className="app-job">Full Stack Developer</h3>
            <p className="app-description">
              I design and build beautiful websites. I am trained as a Full
              Stack Developer but I currently prefer frontend work and I'm
              seeking employment as a frontend developer, however, I am capable
              of working fullstack if necessary, I really enjoy it all. I work
              with React, NodeJS, Express, Knex.js and Postgress. I am
              proficient in HTML, CSS, and Javascript.
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
