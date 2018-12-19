import React, { Component } from 'react';
import './Timeline.css';

class TimelineContinued extends Component {
  state = { show: false };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onPageScrollContinued);
  };

  onPageScrollContinued = () => {
    if (window.pageYOffset > 1650) {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.show ? 'timeline-continued-show' : 'timeline-continued'
        }
      >
        <span className="timeline-icons fa-3x">
          <i className="fas fa-sun" />
        </span>
        <h3 className="timeline-continued-title">Continued Education</h3>
        <p className="timeline-continued-wordsOne">
          I learned most of what I know by taking online courses and I've
          recently graduated from Galvanize's Full Stack Web Development
          Immersive program.
        </p>
        <p className="timeline-continued-wordsTwo">
          The first course that I took really pushed me to continue and further
          cultivated my passion for designing webpages. This first course was
          comprised of Introduction to HTML5, Introduction to CSS3,
          Interactivity with JavaScript, and Responsive Web Design. The passion
          just grew from there and I continue to learn and grow every day.
        </p>
      </div>
    );
  }
}

class TimelineFurther extends Component {
  state = { show: false };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onPageScrollFurther);
  };

  onPageScrollFurther = () => {
    if (window.pageYOffset > 2000) {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <div
        className={
          this.state.show ? 'timeline-further-show' : 'timeline-further'
        }
      >
        <span className="timeline-icons">
          <i className="fas fa-moon fa-3x" />
        </span>
        <h3 className="timeline-further-title">Further Development</h3>
        <p className="timeline-further-wordsOne">
          I continue to study full stack development and spend most of my time
          educating myself and trying to be the best developer I can be.
        </p>
        <p className="timeline-further-wordsTwo">
          Galvanize covered topics such as React, Express, and PostgreSQL.
          Learning a framework was an eye opening experience, and provided more
          insight into the complexity of the web design world. Having this
          knowledge only pushed me further into the development world, and I
          began to look for more areas to improve.
        </p>
      </div>
    );
  }
}

class TimelineNow extends Component {
  state = { show: false };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onPageScrollNow);
  };

  onPageScrollNow = () => {
    if (window.pageYOffset > 2500) {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <div className={this.state.show ? 'timeline-now-show' : 'timeline-now'}>
        <span className="timeline-icons">
          <i className="fas fa-mountain fa-3x" />
        </span>
        <h3 className="timeline-now-title">Present Time</h3>
        <p className="timeline-now-wordsOne">
          Having the prior knowledge of developing in React framework, becoming
          more comfortable working with node modules, and working with the
          Material Design layout. I began to feel comfortable enough to begin
          pursueing a career in web development.
        </p>
        <p className="timeline-now-wordsTwo">
          Following this decision, I also began to look into further knowledge.
          I am currently building my knowledge, and constructing a better
          understanding of the React framework every day.
        </p>
      </div>
    );
  }
}

class Timeline extends Component {
  state = { show: false };

  componentDidMount = () => {
    window.addEventListener('scroll', this.onPageScrollBeginning);
  };

  onPageScrollBeginning = () => {
    if (window.pageYOffset > 1150) {
      this.setState({ show: true });
    }
  };

  render() {
    return (
      <div className="timeline-background">
        <h1 className="timeline-title">Development Timeline</h1>
        <div className="timeline">
          {/* <span className="timeline-beginning-dot" />
          <span className="timeline-continued-dot" />
          <span className="timeline-further-dot" />
          <span className="timeline-now-dot" /> */}
          <div className="timeline-line" />
          <div
            className={
              this.state.show ? 'timeline-beginning-show' : 'timeline-beginnin'
            }
          >
            <span className="timeline-icons">
              <i className="fas fa-play-circle fa-3x" />
            </span>
            <h3 className="timeline-beginning-title">The Beginning</h3>
            <p className="Timeline-beginning-wordsOne">
              I started learning to code as a hobby using tools such as
              CodeAcademy, FreeCodeCamp, and Google.
            </p>
            <p className="Timeline-beginning-wordsTwo">
              Working on simple projects, such as coding a hangman game, sparked
              an ember that would eventually catch fire and drive me toward a
              career in Web Development.
            </p>
          </div>

          <TimelineContinued />
          <TimelineFurther />
          <TimelineNow />
        </div>
      </div>
    );
  }
}

export default Timeline;
