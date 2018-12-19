import React from 'react';
import './ContactForm.css';

const ContactForm = props => {
  const first = props.first;
  const last = props.last;
  const email = props.email;
  const reason = props.reason;
  const message = props.comment;

  return (
    <div className="form-container">
      <p className="contact-form-info">David, </p>
      <p className="contact-form-info">
        I can be reached at:
        <span className="contact-response">{` ${email}`}</span>
      </p>
      <p className="contact-form-info">
        This message is for: <span className="contact-response">{reason}</span>
      </p>
      <p className="contact-form-info">
        I hope this finds you well:
        <span className="contact-response">{message}</span>
      </p>
      <p className="contact-form-info">Regards,</p>
      <p className="signature">
        <br /> {`${first} ${last}`}
      </p>
    </div>
  );
};

export default ContactForm;
