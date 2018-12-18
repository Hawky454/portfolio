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
            all skill sets. I am a father and dedicated full stack developer. I
            have developed a background in leadership, management, as well as
            the customer experience. These skills that I have developed over
            time help me to create web pages with a mindset towards the User
            Experience. I am an Full Stack Web Developer Immersive graduate from
            Galvanize
          </p>
        </div>
        <div className="body-photo">
          <Photo />
        </div>
        <div className="body-second-header">
          <p className="body-text">
            I have experience in frameworks such as React and Bootstrap. I
            develop web pages and single page applications in a NodeJS
            environment, and have experience working with Postgres and Express.
          </p>
        </div>
      </div>
    );
  }
}

export default Body;

/* <i class="fab fa-connectdevelop fa-5x" /> */
