import React, { Component } from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

const API_URL = getHostURL();
const API_PORTFOLIO = `${API_URL}/api/portfolio`;

function getHostURL() {
  if (window.location.host.indexOf('localhost') !== -1) {
    return 'http://localhost:5001';
  } else {
    return 'https://tobacco-cellar-server.herokuapp.com'; //!this address needs to be changed... need to deploy server first...
  }
}

class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    comment: ''
  };

  addPortfolio = event => {
    event.preventDefault();
    let data = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      reason: this.refs.reason.value,
      comment: this.refs.comment.value
    };
    let request = new Request(API_PORTFOLIO, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(data)
    });
    fetch(request).then(res => {
      res.json().then(data => {
        console.log(data);
      });
    });
    // window.location.reload();
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      reason: '',
      comment: ''
    });
  };

  handleInputFirstName = event => {
    this.setState({ firstName: event.target.value });
  };

  handleInputLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  handleInputEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleInputReason = event => {
    this.setState({ reason: event.target.value });
  };

  handleInputComment = event => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div className="contact-holder">
        <h1 className="contact-title">Contact Me</h1>
        <form className="contact-container">
          <input
            ref="firstName"
            className="first"
            value={this.state.firstName}
            onChange={this.handleInputFirstName}
            type="text"
            name="firstName"
            placeholder="First Name (required)"
            required
          />
          <input
            ref="lastName"
            className="last"
            value={this.state.lastName}
            onChange={this.handleInputLastName}
            type="text"
            name="lastName"
            placeholder="Last Name (required)"
            required
          />
          <input
            ref="email"
            className="email"
            value={this.state.email}
            onChange={this.handleInputEmail}
            type="email"
            name="email"
            placeholder="Email (required)"
            required
          />
          <select
            ref="reason"
            className="reason"
            value={this.state.reason}
            onChange={this.handleInputReason}
          >
            <option defaultValue hidden>
              Reason for response
            </option>
            <option name="job">A Job Opportunity</option>
            <option name="feedback">Website Feedback</option>
            <option name="greeting">Just Saying Hi!</option>
          </select>
          <textarea
            ref="comment"
            className="comment"
            value={this.state.comment}
            onChange={this.handleInputComment}
            type="text"
            name="comment"
            placeholder="Leave Comment Here"
          />
          <button
            onClick={this.addPortfolio}
            className="submit"
            type="submit"
            action="submit"
          >
            Send Message
          </button>
        </form>
        <ContactForm
          className="contact-input"
          first={this.state.firstName}
          last={this.state.lastName}
          email={this.state.email}
          reason={this.state.reason}
          comment={this.state.comment}
        />
      </div>
    );
  }
}

export default Contact;
