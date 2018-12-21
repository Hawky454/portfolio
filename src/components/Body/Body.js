import React, { Component } from 'react';
import './Body.css';
import Photo from '../Photo/Photo';

class Body extends Component {
  state = { show: false };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onPageScroll);
  };

  onPageScroll = () => {
    if (window.pageYOffset > 400) {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <div className={this.state.show ? 'body-details-scroll' : 'body-details'}>
        <div className="body-first-header">
          <i className="fas fa-male fa-5x" />
          <h3 className="body-about-me">About Me:</h3>
          <p className="body-text">
            I am a self driven individual, constantly on the search to improve
            all skill sets. I am a single father and dedicated web developer. I
            have developed a background in leadership, management, as well as
            the customer experience. These skills that I have developed over
            time help me to create web pages with a mindset towards the User
            Experience. I am a Full Stack Web Developer Immersive alumni from
            Galvanize Code Academy - Austin, TX.
          </p>
        </div>
        <div className="body-photo">
          <Photo />
        </div>
        <div className="body-second-header">
          <i className="fab fa-react fa-5x" />
          <p className="body-text">
            I have experience in frameworks such as React, Angular, Vue,
            Bootstrap and Skeleton. I develop web pages and single page
            applications in a NodeJS environment, and have experience working
            with PostgreSQL, Knex.js, API's, JSON, NPM, Express and HTML5/CSS3.
            My preferred version control is the almighty Git.
          </p>
          <span className="icons">
            <i className="fab fa-angular fa-2x" />
          </span>
          <span className="icons">
            <i className="fab fa-vuejs fa-2x" />
          </span>
          <span className="icons">
            <i className="fab fa-node-js fa-2x" />
          </span>
          <span className="icons">
            <i className="fab fa-github fa-2x" />
          </span>
        </div>
      </div>
    );
  }
}

export default Body;

/* <i class="fab fa-connectdevelop fa-5x" /> */
