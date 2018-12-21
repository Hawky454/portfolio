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
        <span className="timeline-icons-continued">
          <i className="fas fa-sun fa-3x" />
        </span>
        <h3 className="timeline-continued-title">Continued Education</h3>
        <p className="timeline-continued-wordsOne">
          I learned a lot by taking advantage of all the free online courses but
          in early 2018 I thought it was time to take the plunge and go ahead
          and turn this hobby of mine into something real, I decided to go back
          to school! I attended Galvanize's Full Stack Immersive Code Academy
          Program and graduated in October of 2018.
        </p>
        <p className="timeline-continued-wordsTwo">
          The immersive program really pushed and challenged me and it further
          cultivated my passion for designing websites, writing server logic and
          working with relational database management systems.
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
        <span className="timeline-icons-further">
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
        <span className="timeline-icons-now">
          <i className="fas fa-mountain fa-3x" />
        </span>
        <h3 className="timeline-now-title">Present Time</h3>
        <p className="timeline-now-wordsOne">
          Now, being a Galvanize alumni and having the knowledge of developing
          in React.js, I'm more comfortable working with node modules, and
          working with Material, Font Awesome and other design layouts, I now
          feel comfortable enough with my skills to pursue a career in web
          development.
        </p>
        <p className="timeline-now-wordsTwo">
          Folllowing this decision and feeling comfortable working with React, I
          felt I needed to explore other popular JavaScript frameworks such as
          Vue and Angular. I've found that the best way to learn is to start
          creating, so I am currently working on apps in both Vue and Angular. I
          am currently building my knowledge and constructing a better
          understanding of these JavaScript frameworks every day. Thank you for
          taking the time to look at my site and feel free to send me a message
          in the form below. I look forward to hearing from you!
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
          <span className="timeline-beginning-dot" />
          <span className="timeline-continued-dot" />
          <span className="timeline-further-dot" />
          <span className="timeline-now-dot" />
          <div className="timeline-line" />
          <div
            className={
              this.state.show ? 'timeline-beginning-show' : 'timeline-beginning'
            }
          >
            <span className="timeline-icons-beginning">
              <i className="fas fa-play-circle fa-3x" />
            </span>
            <h3 className="timeline-beginning-title">The Beginning</h3>
            <p className="Timeline-beginning-wordsOne">
              I first dabbled in code way back in 1997! I taught myself how to
              use html and created several websites to support some of the local
              bands that I grew up with. It wasn't until much, much later that I
              became smitten with coding. In early 2017 I started to get
              intrested in coding as a hobby, using tools such as CodeAcademy,
              FreeCodeCamp, and Google Dev Tools.
            </p>
            <p className="Timeline-beginning-wordsTwo">
              Working on projects, such as coding a hangman game and creating
              simple websites sparked an ember that would eventually catch fire
              and drive me towards a career in Web Development.
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
