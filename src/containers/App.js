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
            {/* <i className="scanner fas fa-barcode fa-7x" /> */}
            <h1 className="app-title">David Miller</h1>

            <span className="app-barcode">
              <span className="app-icons">
                <a
                  href="https://www.linkedin.com/in/david-miller-b75585a/"
                  alt="LinkIn link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin fa-3x" />
                </a>
              </span>
              <span className="app-icons">
                <a
                  href="https://www.facebook.com/profile.php?id=100005077638871"
                  alt="Facebook link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook fa-3x" />
                </a>
              </span>
              <span className="app-icons">
                <a
                  href="https://github.com/Hawky454"
                  alt="GitHub link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github fa-3x" />
                </a>
              </span>
              <span className="app-icons">
                <a
                  href="https://twitter.com/DavidMi11254344"
                  alt="Twitter link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter fa-3x" />
                </a>
              </span>
            </span>

            <h3 className="app-job">Full Stack Developer</h3>
            <p className="app-description">
              I design and build beautiful websites. I am trained as a Full
              Stack Developer but I currently prefer frontend work and I'm
              seeking employment as a frontend developer, however, I am capable
              of working fullstack as well, I really enjoy it all. I work with
              React, NodeJS, Express, Knex.js and Postgress. I am proficient in
              HTML, CSS, and Javascript.
            </p>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
