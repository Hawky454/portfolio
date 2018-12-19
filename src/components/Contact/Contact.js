import React, { Component } from 'react';
import './Contact.css';
import ContactForm from '../ContactForm/ContactForm';

class Contact extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    reason: '',
    comment: ''
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
            className="first"
            value={this.state.firstName}
            onChange={this.handleInputFirstName}
            type="text"
            name="first-name"
            placeholder="First Name (required)"
            required
          />
          <input
            className="last"
            value={this.state.lastName}
            onChange={this.handleInputLastName}
            type="text"
            name="last-name"
            placeholder="Last Name (required)"
            required
          />
          <input
            className="email"
            value={this.state.email}
            onChange={this.handleInputEmail}
            type="email"
            name="email"
            placeholder="Email (required)"
            required
          />
          <select
            className="reason"
            value={this.state.reason}
            onChange={this.handleInputReason}
          >
            <option defaultValue hidden>
              Reason for response
            </option>
            <option name="job">A Job Opportunity</option>
            <option name="feedback">Website Feedback</option>
          </select>
          <textarea
            className="comment"
            value={this.state.comment}
            onChange={this.handleInputComment}
            type="text"
            name="feedback"
            placeholder="Leave Comment Here"
          />
          <input
            className="first"
            value={this.state.firstName}
            onChange={this.handleInputFirstName}
            type="text"
            name="first-name"
            placeholder="First Name (required)"
            required
          />
          <button className="submit" type="submit" action="submit">
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
